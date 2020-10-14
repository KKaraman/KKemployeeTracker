INSERT INTO 
    department (department)
VALUES
    ("Management"),
    ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("HR"),
    ("Legal");

INSERT INTO `role`
    (title, salary,department_id)
VALUES
    ("Consultant", 1000000,1),
    ("Engineer", 150000,2),
    ("Salesperson", 200000, 3),
    ("Accountant", 100000, 4),
    ("HR", 100000, 5),
    ("Lawyer", 100000, 6);

INSERT INTO employee
    (first_name,last_name, role_id, manager_id)
VALUES
    ("Lucifer", "Morningstar", 1, 1),
    ("Chloe", "Decker", 2, 1),
    ("Mazikeen", "Smith", 3, 1),
    ("Dan", "Decker", 4, 1),
    ("Linda", "Martin", 5, 1),
    ("Marcus", "Pierce", 6, 1);


