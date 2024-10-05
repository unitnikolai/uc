CREATE DATABASE forum;

USE forum;

CREATE TABLE articles(
    articleID int identity (1,1) PRIMARY KEY,
    title varchar(255) not null,
    content TEXT NOT NULL,
    author varchar(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
);