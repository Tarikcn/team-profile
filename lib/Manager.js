// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// require the Employee class so that the Manager class can extend it
const Employee = require("./Employee");

// create a class called Manager that extends Employee class (which is in Employee.js) and pass in the name, id, email, and officeNumber parameters to the constructor function and call the super() method on the name, id, and email parameters inside the constructor.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

// export the Manager class so that it can be used in other files
module.exports = Manager;
