DROP DATABASE IF EXISTS covid19db;
CREATE DATABASE covid19db;


USE covid19db;

CREATE TABLE examples
(
   id INT(11)
   AUTO_INCREMENT PRIMARY KEY,
text VARCHAR
   (255),
description TEXT,
createdAt DATETIME,
updatedAt DATETIME,
name TEXT,
city TEXT,
state TEXT,
price TEXT


)

