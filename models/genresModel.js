const pool = require("../db/pool");

module.exports = {
  async find(id) {
    const { rows } = await pool.query("SELECT * FROM genres WHERE id = $1", [
      id,
    ]);
    return rows[0];
  },
  async findByGame(gameId) {
    const { rows } = await pool.query(
      "SELECT gg.genre_id AS id, g.title AS title FROM games_genres AS gg " +
        "INNER JOIN genres AS g ON gg.genre_id = g.id WHERE game_id = $1",
      [gameId],
    );
    return rows;
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
