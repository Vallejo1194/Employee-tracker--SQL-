DROP DATABASE IF EXISTS employee_list;
CREATE DATABASE employee_list;

USE employee_list;

CREATE TABLE department_ (
  id: INT PRIMARY KEY,
  name: VARCHAR(30) NOT NULL
);

CREATE TABLE role_ (
  id: INT PRIMARY KEY,
  title: VARCHAR(30),
  salary: DECIMAL,
  department_id: INT
);

CREATE TABLE employee_ (
 id: INT PRIMARY KEY,
 first_name: VARCHAR(30),
 last_name: VARCHAR(30),
 role_id: INT,
 manager_id: INT NOT NULL

);

