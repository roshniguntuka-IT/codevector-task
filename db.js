
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "codevector_db",
    password: "sql@78",
    port: 5432
});

module.exports = pool;