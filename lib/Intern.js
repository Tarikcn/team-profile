// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// require the Employee class so that the Intern class can extend it
const Employee = require("./Employee");
//  create a class called Intern that extends Employee class (which is in Employee.js) and pass in the name, id, email, and github parameters to the constructor function and call the super() method on the name, id, and email parameters inside the constructor.

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

// export the Internr class so that it can be used in other files
module.exports = Intern;
