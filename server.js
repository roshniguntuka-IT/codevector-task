require("dotenv").config();
const express = require("express");
const pool = require("./db");

const app = express();
app.get("/products", async (req, res) => {
    try {
        const { category, cursor, limit = 20 } = req.query;

        let query = `
            SELECT *
            FROM products
        `;

        let values = [];

        if (category) {
            query += ` WHERE category = $1`;
            values.push(category);
        }

        if (cursor) {
            const position = values.length + 1;

            query += category
                ? ` AND id < $${position}`
                : ` WHERE id < $${position}`;

            values.push(cursor);
        }

        query += `
            ORDER BY created_at DESC, id DESC
            LIMIT ${Number(limit)}
        `;

        const result = await pool.query(query, values);

       res.json({
    products: result.rows,
    nextCursor: result.rows.length
        ? result.rows[result.rows.length - 1].id
        : null
});

    } catch (error) {
        console.error(error);
        res.status(500).send("Database Error");
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});