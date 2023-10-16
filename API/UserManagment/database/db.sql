CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    desc VARCHAR(255),
    photo VARCHAR(255),
    stock INTEGER NOT NULL CHECK (population>0),
    sold INTEGER 
);