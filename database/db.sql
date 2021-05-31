CREATE DATABASE database_links;

USE database_links;

CREATE TABLE users(
    id int (11) Not null,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
);

ALTER TABLE users 
   ADD  Primary KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

    DESCRIBE users;

CREATE TABLE links (
    id INT(11) not null,
    title VARCHAR(50) NOT NULL,
    url VARCHAR(255) NOT NULL,
    descripcion TEXT NULL,
    user_id int(11) NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
    ADD PRIMARY KEY (id);

ALTER TABLE links
    modify id int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT = 2; 

DESCRIBE links;
