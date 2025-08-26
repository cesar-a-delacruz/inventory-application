const pool = require("../db/pool");

module.exports = {
  async find(id) {
    const { rows } = await pool.query("SELECT * FROM genres WHERE id = $1", [
      id,
    ]);
    return rows[0];
  },
  async findAll() {
    const { rows } = await pool.query("SELECT * FROM genres");
    return rows;
  },
  async insert(genre) {
    const { title } = genre;
    const { rowCount } = await pool.query(
      "INSERT INTO genres (title) VALUES ($1)",
      [title],
    );
    return rowCount;
  },
  async update(id, genre) {
    const { title } = genre;
    const { rowCount } = await pool.query(
      "UPDATE genres SET title = $1 WHERE id = $2",
      [title, id],
    );
    return rowCount;
  },
};
