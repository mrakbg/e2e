Project: User Input App
Overview
This project is a simple Node.js application where users can input their name, and it will be saved in a MySQL database. The app consists of:

A form where the user enters their name.
A backend using Node.js (Express) to handle the form data.
A MySQL database to store the user input.
The project includes the app code, unit tests, and a local MySQL setup.

Developer Workflow
Steps for the Developer:
Write the App Code:

A Node.js Express app is created that listens for user input.
The input is saved to a MySQL database using the mysql library.
Create Tests:

Mocha and Chai are used for writing tests.
Tests are created to ensure the functionality of the app, especially the POST request for saving data.
Local Testing:

Tests can be run locally using the npm test command, which will ensure everything is working before pushing to the repository.
Push Code to Git:

Developer pushes the code to the Git repository once everything is working locally.
Steps for DevOps Engineer (after Developer's Work):
Set Up the Infrastructure:

Set up a virtual machine (VM) or Cloud infrastructure (like GCP or AWS).
Ensure the VM has Node.js and MySQL installed.
Deploy the Application:

Pull the code from the repository to the VM.
Install all dependencies using npm install.
Set up a MySQL database and table on the VM.
Configure MySQL:

Create a database and table to store the user input. The database and table can be created using the following SQL commands:
sql
Copy
Edit
CREATE DATABASE user_input_db;
USE user_input_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
Run the App:

Once the database is configured, start the Node.js application using node app.js.
The app will be accessible at http://localhost:3000.
Testing and Validation:

Ensure that the app works as expected by entering data in the field and confirming that it is saved to the database.
Ensure that the tests pass before the application is deployed.
MySQL Setup
Before running the app, ensure you have MySQL set up locally or on your cloud infrastructure.

Steps to Create the Database and Table Locally:
Log into MySQL:

bash
Copy
Edit
mysql -u root -p
Create the database and table:

sql
Copy
Edit
CREATE DATABASE user_input_db;
USE user_input_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
Ensure that your db.js file is properly configured to connect to the MySQL database.

App Code Structure
Directory Structure:
bash
Copy
Edit
.
├── app.js                 # Main application file to run the Express app
├── db.js                  # Database connection setup
├── package.json           # Dependencies and npm scripts
├── views/                 # Views for the app
│   └── index.html         # HTML form for input
├── test/                  # Test files
│   └── app.test.js        # Test file for the app
└── README.md              # This file
Code Explanation:
app.js:

Sets up an Express server.
Serves the HTML form from views/index.html.
Handles form submissions and saves the user data into the MySQL database.
db.js:

Sets up the connection to the MySQL database.
Manages the database queries to insert and retrieve data.
views/index.html:

The front-end form where users can enter their name.
Submits the form data to the backend.
test/app.test.js:

Tests the functionality of the app using Mocha and Chai.
Ensures that the application works as expected.
How to Run Locally
Prerequisites:
MySQL must be installed on your local machine.
Node.js and npm must be installed.
1. Clone the Repository:
bash
Copy
Edit
git clone <repo_url>
cd <repo_folder>
2. Install Dependencies:
bash
Copy
Edit
npm install
3. Set Up MySQL:
Create the database and table (see MySQL setup section above).
4. Run the App:
bash
Copy
Edit
node app.js
The app should be accessible at http://localhost:3000.

5. Run Tests:
bash
Copy
Edit
npm test
Ensure all tests pass before pushing changes to the repository.

don't forget to create env in system : 
host: process.env.DB_HOST,  // Pulling DB host from environment variable
  user: process.env.DB_USER,  // Pulling DB username from environment variable
  password: process.env.DB_PASSWORD,  // Pulling DB password from environment variable
  database: process.env.DB_NAME  // Pulling DB name from environment variable