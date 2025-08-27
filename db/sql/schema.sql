CREATE TABLE games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100),
    release_year INTEGER,
    cover TEXT
);

CREATE TABLE genres (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(25)
);

CREATE TABLE developers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    full_name VARCHAR(100),
    country VARCHAR(50)
);

CREATE TABLE games_developers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    game_id INTEGER,
    developer_id INTEGER,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
    FOREIGN KEY (developer_id) REFERENCES developers(id) ON DELETE CASCADE
);

CREATE TABLE games_genres (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    game_id INTEGER,
    genre_id INTEGER,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE
);