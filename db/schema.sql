CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

    id INT AUTO_INCREMENT,
    burger_name VARCHAR(20),
    devoured BOOL,
    PRIMARY KEY (id)

);