const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employeeArray = []; // array for all entered employees to be pushed into for later use
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
let team = [];
const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// function to initialize program and prompt user for input to create team profile page using inquirer
function init() {
  console.log("Welcome to the Team Profile Generator");
  // prompt user for manager information using inquirer
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
      },
    ])
    .then((answers) => {
      // create new Manager object
      let manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      employeeArray.push(manager); // add manager to employee array
      // call addEmployee function
      addEmployee();
    });
}

init();
