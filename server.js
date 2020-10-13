//import the mysql package
const mysql = require("mysql");
//import the inquirer package
const inquirer = require("inquirer");

// Create/define MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Sarshey080',
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

        case "Exit":
        default:
            console.log("Goodbye!");
            connection.end();
    }
}

function addDepartment() {
    console.log("user wants to add a department");
    mainPrompt();
}

function addRole() {
    console.log("user wants to add a role");
    mainPrompt();
}

function addEmployee() {
    console.log("user wants to add an employee");
    mainPrompt();
}

function viewDepartments() {
    console.log("user wants to view departments");
    connection.query('SELECT * FROM department', (err,rows) => {
    if(err) {
        throw err;
    }
    console.log('Data received from department Db:');
    console.log(rows);
    });
    mainPrompt();
}

function viewRoles(){
    console.log("user wants to view roles");
    connection.query('SELECT * FROM role', (err,rows) => {
    if(err) {
        throw err;
    }
    console.log('Data received from role Db:');
    console.log(rows);
    });
    mainPrompt();
}

function viewEmployees(){
    console.log("user wants to view employees");
    connection.query('SELECT * FROM employee', (err,rows) => {
    if(err) {
        throw err;
    }
    console.log('Data received from employee Db:');
    console.log(rows);
    });
    mainPrompt();
}

function updateEmployeeRole() {
    console.log("user wants to update employee role");
    mainPrompt();
}