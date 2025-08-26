const pool = require("../db/pool");

module.exports = {
  async find(id) {
    const { rows } = await pool.query(
      "SELECT * FROM developers WHERE id = $1",
      [id],
    );
    return rows[0];
  },
  async findAll() {
    const { rows } = await pool.query("SELECT * FROM developers");
    return rows;
  },
  async insert(developer) {
    const { full_name, country } = developer;
    const { rowCount } = await pool.query(
      "INSERT INTO developers (full_name, country) VALUES ($1, $2)",
      [full_name, country],
    );
    return rowCount;
  },
  async update(id, developer) {
    const { full_name, country } = developer;
    const { rowCount } = await pool.query(
      "UPDATE developers SET full_name = $1, country = $2 WHERE id = $3",
      [full_name, country, id],
    );
    return rowCount;
  },
};
