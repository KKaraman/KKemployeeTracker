# KKemployeeTracker

* This app uses the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* This app uses [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

* This app uses dotenv NPM package to hide the user password.

    Therefore an npm install must be done before starting the app using "npm start run" command in the terminal.

* This app uses [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.

A screenshot of the tables created by the program are shown below for a visual explanation of the sql schema 

![KKemployeeTracker_screenshot](https://user-images.githubusercontent.com/68077734/96036066-8ef80900-0e29-11eb-90dc-d1b267f0d28f.png)

* A `seed.sql` file is pre-populate the database to start the program faster during testing.

* All the basic functionality works well and not all the advanced features were comleted due to time constraints.

## Requirements completed

* The program is fully functional application and does not have any known bugs.

* The command-line application allows users to:

  * Add departments, 
  * Add roles, 
  * Add employees,
  * View departments, 
  * View roles, 
  * View employees,
  * Update employee roles,
  * Update employee managers,
  * Combined display of employee name, job and salary by combining select elements from the role and employee tables,
  * Terminate the SQL connection and exit the program
  
## Demonstration video

The link for the kkemployeetracker video can be found [here](https://drive.google.com/file/d/13wpTUzN6_u6ub7z2DJwLdPDvf-eYMMJL/view).

## Questions

For more information please contact me using my [email](keremukaraman@gmail.com).

The link for the employee tracker repo can be found [here](https://github.com/KKaraman/KKemployeeTracker).

If you liked this, you can see my other repositories at my [GitHub profile](https://github.com/KKaraman).

![Commit Day](https://img.shields.io/github/last-commit/KKaraman/KKemployeeTracker?style=plastic).
