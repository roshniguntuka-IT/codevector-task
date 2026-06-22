require("dotenv").config();
const pool = require("./db");

const categories = [
  "Electronics",
  "Books",
  "Clothing",
  "Sports",
  "Home"
];

async function seedProducts() {
  try {
    const totalProducts = 200000;
    const batchSize = 1000;

    for (let batchStart = 1; batchStart <= totalProducts; batchStart += batchSize) {

      const values = [];

      for (
        let i = batchStart;
        i < batchStart + batchSize && i <= totalProducts;
        i++
      ) {
        const category =
          categories[Math.floor(Math.random() * categories.length)];

        const price =
          Math.floor(Math.random() * 10000) + 100;

        values.push(
          `('Product ${i}', '${category}', ${price}, NOW(), NOW())`
        );
      }

      const query = `
        INSERT INTO products
        (name, category, price, created_at, updated_at)
        VALUES
        ${values.join(",")}
      `;

      await pool.query(query);

      console.log(
        `Inserted ${Math.min(batchStart + batchSize - 1, totalProducts)} products`
      );
    }

    console.log("Finished inserting 200,000 products");

  } catch (error) {
    console.error(error);
  } finally {
    await pool.end();
  }
}

seedProducts();