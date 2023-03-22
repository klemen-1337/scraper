CREATE TABLE apartments (
    id SERIAL,
    title VARCHAR NOT NULL,
    price VARCHAR NOT NULL,
    loc VARCHAR NOT NULL,
    imageUrl VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);