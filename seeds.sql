INSERT INTO 
    department (department)
VALUES
    ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("HR"),
    ("Administrator");

INSERT INTO `role`
    (title, salary,department_id)
VALUES
    ("Chloe Decker", 100000, 1),
    ("Lucifer Morningstar", 1000000,2),
    ("Linda Martin", 500000,3);

INSERT INTO employee
    (first_name,last_name, role_id, manager_id)
VALUES
    ("Mazikeen", "Smith", 1, 1),
    ("Dan", "Decker", 2, 2),
    ("Marcus", "Pierce", 3, 3);


