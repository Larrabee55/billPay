
DROP DATABASE IF EXISTS billPayDb;
CREATE DATABASE billPayDb;

use billPayDb;

create table userBills(
   id  INTEGER auto_increment not null,
   bill varchar(100),
   income INTEGER,
   receipt varchar(100),
   iou varchar(100),
   yom varchar(100),
   PRIMARY KEY (id)
);

create table userInfo(
   id  INTEGER auto_increment not null,
   uPassword varchar(100) not null,
   email varchar(100) not null,
   PRIMARY key (id)
);