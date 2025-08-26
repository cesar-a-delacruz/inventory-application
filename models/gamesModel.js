const pool = require("../db/pool");

module.exports = {
  async find(id) {
    const { rows } = await pool.query("SELECT * FROM games WHERE id = $1", [
      id,
    ]);
    return rows[0];
  },
  async findAll() {
    const { rows } = await pool.query("SELECT * FROM games");
    return rows;
  },
  async insert(game) {
    const { title, release_year, cover } = game;
    const { rowCount } = await pool.query(
      "INSERT INTO games (title, release_year, cover) VALUES ($1, $2, $3)",
      [title, release_year, cover],
    );
    return rowCount;
  },
};
