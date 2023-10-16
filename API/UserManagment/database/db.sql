CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(60) NOT NULL,
    details VARCHAR(255),
    photo VARCHAR(255),
    stock INTEGER NOT NULL CHECK (stock>0),
    sold INTEGER 
);

CREATE TABLE org(
    id SERIAL PRIMARY KEY,
    org_name VARCHAR(60) NOT NULL,
    details VARCHAR(255),
    photo VARCHAR(255),
    members Array(30) CHECK (members>0),
    createdby VARCHAR(255) 
);