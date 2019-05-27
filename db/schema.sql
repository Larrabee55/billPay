CREATE DATABASE billPay_db;
USE billPay_db;




create table userIou(
id integer auto_increment not null,
recipient varchar(100) not null,
amount int(100) not null,
memo varchar(200),
userId int(100),
primary key(id)
);

create table receipt(
id int auto_increment not null,
catagory varchar(200) not null,
amount int not null,
dateBought date,
userId int(100),
primary key(id)
);

create table userBill(
id int auto_increment not null,
catagory varchar(200) not null,
bill_name varchar(200) not null,
amount int(100) not null,
dueDate date,
userId int(100),
primary key(id) 
);

create table userInfo(
id int auto_increment not null,
username varchar(200) not null,
userId int(100),
password varchar(200) not null,
primary key(id)
);
