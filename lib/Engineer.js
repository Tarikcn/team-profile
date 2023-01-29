// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// require the Employee class so that the Engineer class can extend it
const Employee = require("./Employee");
//  create a class called Engineer that extends Employee class (which is in Employee.js) and pass in the name, id, email, and github parameters to the constructor function and call the super() method on the name, id, and email parameters inside the constructor.

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

// export the Engineer class so that it can be used in other files
module.exports = Engineer;
