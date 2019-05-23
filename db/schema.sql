CREATE DATABASE billPayDb;
USE billPayDb;

CREATE TABLE billPayDb
(
  id int NOT NULL
  AUTO_INCREMENT,
  bill_name varchar
  (255) NOT NULL,
  amount DECIMAL
  (10,2) NOT NULL,
  due_date DATE NOT NULL,
  PRIMARY KEY
  (id)
  );