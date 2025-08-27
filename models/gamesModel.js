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
    const { title, release_year, cover, genres, developers } = game;
    const { rowCount } = await pool.query(
      "INSERT INTO games (title, release_year, cover) VALUES ($1, $2, $3)",
      [title, release_year, cover],
    );
    const id = (await pool.query("SELECT COUNT(*) FROM games")).rows[0].count;
    genres.forEach(async (genre) => {
      await pool.query(
        "INSERT INTO games_genres (game_id, genre_id) VALUES ($1, $2)",
        [id, genre],
      );
    });
    developers.forEach(async (developer) => {
      await pool.query(
        "INSERT INTO games_developers (game_id, developer_id) VALUES ($1, $2)",
        [id, developer],
      );
    });

    return rowCount;
  },
  async update(id, game) {
    const { title, release_year, cover } = game;
    const { rowCount } = await pool.query(
      "UPDATE games SET title = $1, release_year = $2, cover = $3 WHERE id = $4",
      [title, release_year, cover, id],
    );
    return rowCount;
  },
  async delete(id) {
    const { rowCount } = await pool.query("DELETE FROM games WHERE id = $1", [
      id,
    ]);
    return rowCount;
  },
};
