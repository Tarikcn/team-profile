const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employeeArray = []; // array for all entered employees to be pushed into for later use
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
let team = []; // array for team to be pushed into for later use

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
        name: "employeeType",
        message: "Which type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((answers) => {
      if (answers.employeeType === "Engineer") {
        // prompt user for engineer's information
        inquirer
          .prompt([
            {
              type: "input",
              name: "engineerName",
              message: "What is your engineer's name?",
            },
            {
              type: "input",
              name: "engineerId",
              message: "What is your engineer's ID?",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "What is your engineer's email?",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "What is your engineer's GitHub username?",
            },
          ])
          .then((answers) => {
            // create new engineer object
            const engineer = new Engineer(
              answers.engineerName,
              answers.engineerId,
              answers.engineerEmail,
              answers.engineerGithub
            );
            employeeArray.push(engineer); // add engineer to employee array
            // pompt to either add more employees or finish  building the team and render the HTML
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "continue",
                  message:
                    "Would you like to add more employees or finish building the team?",
                  choices: ["Add more employees", "Finish building team"],
                },
              ])
              .then((answer) => {
                if (answer.continue === "Add more employees") {
                  addEmployee();
                } else {
                  // render the HTML and write it to a file
                  const html = render(employeeArray);
                  fs.writeFile(outputPath, html, "utf-8", (err) => {
                    if (err) throw err;
                    console.log(
                      "Team profile has been written to output/team.html"
                    );
                  });
                }
              });
          });
      } else if (answers.employeeType === "Intern") {
        // prompt user for intern's information
        inquirer

          .prompt([
            {
              type: "input",
              name: "internName",
              message: "What is your intern's name?",
            },
            {
              type: "input",
              name: "internId",
            },
            {
              type: "input",
              name: "internEmail",
            },
            {
              type: "input",
              name: "internSchool",
            },
          ])
          .then((answers) => {
            // create new intern object
            const intern = new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool
            );
            employeeArray.push(intern); // add intern to employee array
            // prompt to add more employees or finish building the team
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "continue",
                  message:
                    "Would you like to add more employees or finish building the team?",
                  choices: ["Add more employees", "Finish building team"],
                },
              ])
              .then((answer) => {
                if (answer.continue === "Add more employees") {
                  addEmployee();
                } else {
                  // render the HTML and write it to a file
                  const html = render(employeeArray);
                  fs.writeFile(outputPath, html, "utf-8", (err) => {
                    if (err) throw err;
                    console.log(
                      "Team profile has been written to output/team.html"
                    );
                  });
                }
              });
          });
      }
    });
}

init();
