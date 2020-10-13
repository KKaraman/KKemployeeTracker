-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS kk_employee_tracker_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE kk_employee_tracker_db;

-- Instruct MYSQL to use this database
USE kk_employee_tracker_db;

-- Create table department
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department varchar(30),
  PRIMARY KEY (id)
);

-- Create table role
CREATE TABLE `role` (
  id INT NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary DECIMAL (12,2) NOT NULL, 
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

-- Create table employee
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM department;
SELECT * FROM `role`;
SELECT * FROM employee;
