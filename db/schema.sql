CREATE DATABASE billPayDb;
USE billPayDb;

CREATE TABLE userBill
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


  CREATE TABLE userReceipts
  (
    id int NOT NULL
    AUTO_INCREMENT,
  receipt_name varchar
    (255) NOT NULL,
  amount DECIMAL
    (10,2) NOT NULL,
  category VARCHAR
    (255) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY
    (id)
  );

    CREATE TABLE userIou
    (
      id int NOT NULL
      AUTO_INCREMENT,
  iou_name varchar
      (255) NOT NULL,
  amount DECIMAL
      (10,2) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY
      (id)
  );