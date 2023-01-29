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

// function to prompt user to add an employee (engineer or intern) or finish building the team
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeRole",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((answers) => {
      // check what type of employee user wants to add
      if (answers.employeeRole === "Engineer") {
        // prompt user for engineer information
        inquirer
          .prompt([
            {
              type: "input",
              name: "engineerName",
              message: "What is the engineer's name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "What is the engineer's ID?",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "What is the engineer's email?",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "What is the engineer's GitHub username?",
            },
          ])
          .then((answers) => {
            // create new Engineer object
            let engineer = new Engineer(
              answers.engineerName,
              answers.engineerId,
              answers.engineerEmail,
              answers.engineerGithub
            );
            employeeArray.push(engineer); // add engineer to employee array
            // call addEmployee function
            addEmployee();
          });
      } else if (answers.employeeRole === "Intern") {
        // prompt user for intern information
        inquirer
          .prompt([
            {
              type: "input",
              name: "internName",
              message: "What is the intern's name?",
            },
            {
              type: "input",
              name: "internId",
              message: "What is the intern's ID?",
            },
            {
              type: "input",
              name: "internEmail",
              message: "What is the intern's email?",
            },
            {
              type: "input",
              name: "internSchool",
              message: "What is the intern's school?",
            },
          ])
          .then((answers) => {
            // create new Intern object
            let intern = new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool
            );
            employeeArray.push(intern); // add intern to employee array
            // call addEmployee function
            addEmployee();
          });
      }
      // if user is done adding employees, call renderTeam function
    });
}

init();
