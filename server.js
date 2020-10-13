//import the mysql package
const mysql = require ("mysql");
//import the inquirer package
const inquirer = require ("inquirer");

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
});

connection.query('SELECT * FROM department', (err,rows) => {
    if(err) {
        throw err;
    }
    console.log('Data received from Db:');
    console.log(rows);
  });