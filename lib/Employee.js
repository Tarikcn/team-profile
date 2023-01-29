// TODO: Write code to define and export the Employee class

// create a class called Employee that takes in the name, id, and email parameters and assign them to the constructor function
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
// export the Employee class so that it can be used in other files
module.exports = Employee;
