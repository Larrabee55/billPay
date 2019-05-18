CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger
(
  id int NOT NULL
  AUTO_INCREMENT,
  burger_name varchar
  (255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY
  (id)
  );