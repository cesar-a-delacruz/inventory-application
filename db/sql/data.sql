-- games
INSERT INTO games (title, release_year, cover) VALUES
('Grand Theft Auto: San Andreas', 2004, 'https://media.vandal.net/t200/3150/200472123346_1.jpg'),
('God of War 2: Divine Retribuition', 2007, 'https://media.vandal.net/100/5360/2007511122935_1b.jpg'),
('Burnout 3: Takedown', 2004, 'https://media.vandal.net/100/3200/2004615201228_1b.jpg'),
('Gran Turismo 4', 2004, 'https://media.vandal.net/100/1210/2004102817513_1b.jpg'),
('Jak 3', 2004, 'https://media.vandal.net/100/3271/2004111805911_1b.jpg');

-- genres
INSERT INTO genres (title) VALUES
('action-adventure'),
('hack and slash'),
('racing'),
('platform'),
('third-person shooter');

-- developers
INSERT INTO developers (full_name, country) VALUES
('Rockstar North', 'United Kingdom'),
('Rockstar Games', 'United States of America'),
('Santa Monica Studio', 'United States of America'),
('Sony', 'Japan'),
('Criterion Games', 'United Kingdom'),
('Electronic Arts', 'United States of America'),
('Polyphony Digital', 'Japan'),
('Naughty Dog', 'United States of America');

-- games developers
INSERT INTO games_developers (game_id, developer_id) VALUES
(1, 1),(1, 2),(2, 3),(2, 4),(3, 5),
(3, 6),(4, 7),(4, 4),(5, 8),(5, 4);

-- games genres
INSERT INTO games_genres (game_id, genre_id) VALUES
(1, 1),(2, 1),(2, 2),(3, 3),
(4, 3),(5, 1),(5, 4),(5, 5);
