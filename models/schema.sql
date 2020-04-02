DROP DATABASE IF EXISTS covid19db;
CREATE DATABASE covid19db;

USE covid19db;

CREATE TABLE need_help_tb
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
title VARCHAR
    (225),
description VARCHAR
    (255),
city VARCHAR
    (255),
state VARCHAR
    (255),
first_name VARCHAR
    (255),
email VARCHAR
    (255),
price decimal
    (8,2)
);
