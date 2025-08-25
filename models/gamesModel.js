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
};
