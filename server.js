//import the mysql package
const mysql = require("mysql");
//import the inquirer package
const inquirer = require("inquirer");
//password
require('dotenv').config()
const sqlPwd = process.env.MYSQL

// Create/define MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: sqlPwd,
    database: 'kk_employee_tracker_db',
});

connection.connect((err) => {
    if (err) {
        console.error("Failed to connect to MySQL: ", err);
        return;
    }
    console.log(`Successfully connected to MySQL DB!`);
    mainPrompt();
});

function mainPrompt() {
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View departments",
            "View roles",
            "View employees",
            "Update employee role",
            "Update employee manager",
            "See employee name, title and salary",
            "Exit"
        ]
    }).then(onMainPromptAnswer);
}

function onMainPromptAnswer({ action }) {
    switch (action) {
        case "Add department":
            addDepartment();
            break;

        case "Add role":
            addRole();
            break;

        case "Add employee":
            addEmployee();
            break;

        case "View departments":
            viewDepartments();
            break;

        case "View roles":
            viewRoles();
            break;

        case "View employees":
            viewEmployees();
            break;

        case "Update employee role":
            updateEmployeeRole();
            break;

        case "Update employee manager":
            updateEmployeeManager();
            break;
        
        case "See employee name, title and salary":
            seeNameTitleSalary();
            break;

        case "Exit":
        default:
            console.log("Goodbye!");
            connection.end();
    }
}

function addDepartment() {
    console.log("user wants to add a department");
    addingDepartment();
    function addingDepartment() {
        inquirer.prompt({
            type: "input",
            name: `department`,
            message: `What department do you want to add?`,
            validate: function (answer) {
                if (answer === "") {
                    return 'You must type something!';
                }
                console.log(`\n user typed: ${answer}`);
                return true;
            }

        }).then(function (data) {
            console.log(`user wants to add: ${data.department}`);
            connection.query("INSERT INTO department (department) VALUES (?)", [data.department], (err, rows) => {
                if (err) {
                    throw err;
                }
                console.log('Data added to department Db:');
            });
        }).then(function () {
            viewDepartments();
        })
    }
}

function addRole() {
    console.log("user wants to add a role");
    addingRole();
    function addingRole() {
        inquirer.prompt([
            {
                type: "input",
                name: `role`,
                message: `What role do you want to add?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    return true;
                }
            },
            {
                type: "input",
                name: `salary`,
                message: `What is the salary for this role?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: `department_id`,
                message: `What is the department ID for this role?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            }
        ])
            .then(function (data) {
                console.log(`the user wants to add: \nrole ${data.role}\nsalary ${data.salary}\ndepartment_id ${data.department_id}`);
                connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [data.role, data.salary, data.department_id], (err, rows) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Data added to role Db:');
                });
            }).then(function () {
                viewRoles();
            })
    }
}

function addEmployee() {
    console.log("user wants to add an employee");
    addingEmployee();
    function addingEmployee() {
        inquirer.prompt([
            {
                type: "input",
                name: `first_name`,
                message: `What is the first name of the employee?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    return true;
                }
            },
            {
                type: "input",
                name: `last_name`,
                message: `What is the last name of the employee?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    return true;
                }
            },
            {
                type: "input",
                name: `role_id`,
                message: `What is the role_id for this employee?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: `manager_id`,
                message: `What is the manager ID for this employee?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            }
        ])
            .then(function (data) {
                console.log(`the user wants to add employee: \n ${data.first_name} ${data.last_name}\nrole_ID ${data.role_id}\nmanager_id ${data.manager_id}`);
                connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [data.first_name, data.last_name, data.role_id, data.manager_id], (err, rows) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Data added to employee Db:');
                });
            }).then(function () {
                viewEmployees();
            })
    }
}

function viewDepartments() {
    console.log("user wants to view departments");
    connection.query('SELECT * FROM department', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('Data received from department Db:');
        console.table(rows);
        mainPrompt();
    });

}

function viewRoles() {
    console.log("user wants to view roles");
    connection.query('SELECT * FROM role', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('Data received from role Db:');
        console.table(rows);
        mainPrompt();
    });

}

function viewEmployees() {
    console.log("user wants to view employees");
    connection.query('SELECT * FROM employee', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('Data received from employee Db:');
        console.table(rows);
        mainPrompt();
    });
}

function updateEmployeeRole() {
    console.log("user wants to update employee role");
    updatingEmployeeRole();
    function updatingEmployeeRole() {
        inquirer.prompt([
            {
                type: "input",
                name: `employee_id`,
                message: `What is the employee ID that has changed roles?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: `role_id`,
                message: `What is the new role ID for the employee?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            }
        ])
            .then(function (data) {
                console.log(`the user wants to update ${data.employee_id}'s role to ${data.role_id}`);
                // console.log(`UPDATE employee SET manager_id = ${data.manager_id} WHERE id = ${data.employee_id}`);
                connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [data.role_id, data.employee_id], (err, rows) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Data added to employee Db:');
                });
            }).then(function () {
                viewEmployees();
            })
    }
}

function updateEmployeeManager() {
    console.log("user wants to update employee role");
    updatingEmployeeManager();
    function updatingEmployeeManager() {
        inquirer.prompt([
            {
                type: "input",
                name: `employee_id`,
                message: `What is the employee ID that has changed roles?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: `manager_id`,
                message: `What is the new manager ID for the employee?`,
                validate: function (answer) {
                    if (answer === "") {
                        return 'You must type something!';
                    }
                    console.log(`\n user typed: ${answer}`);
                    if (isNaN(answer)) {
                        return 'You must type a number!';
                    } else {
                        return true;
                    }
                }
            }
        ])
            .then(function (data) {
                console.log(`the user wants to update ${data.employee_id}'s manager to ${data.manager_id}`);
                // console.log(`UPDATE employee SET manager_id = ${data.manager_id} WHERE id = ${data.employee_id}`);
                connection.query("UPDATE employee SET manager_id = ? WHERE id = ?", [data.manager_id, data.employee_id], (err, rows) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Data added to employee Db:');
                });
            }).then(function () {
                viewEmployees();
            })
    }
}

function seeNameTitleSalary() {
    console.log("user wants to combine the role and employee tables");
    connection.query("SELECT first_name, last_name,title, salary FROM employee INNER JOIN role ON employee.role_id=role.id", (err, rows) => { 
        if (err) {
            throw err;
        }
        console.table(rows);
        mainPrompt();
    });
}

