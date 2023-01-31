{Tarik Khamliche}

# Team Profile Generator

## Description

Create a Node.js command-line application. This application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

## Technologies Used

- NodeJS
- Inquirer Pkg
- Path
- FS

## Usage

- Create a command-line application that accepts user input .
  - Create classes for each team member provided and export them.
    - The first class is an `Employee` parent class.
  - use inquirer to gather information about the development team members and creates objects for each team member using the correct classes.
    - When a user starts the application then they are prompted to enter the **team manager**’s:
      - Name
      - Employee ID
      - Email address
      - Office number
    - When a user enters those requirements then the user is presented with a menu with the option to:
      - Add an engineer
      - Add an intern
      - Finish building the team
    - When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
      - Engineer's Name
      - ID
      - Email
      - GitHub username
    - When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
      - Intern’s name
      - ID
      - Email
      - School
    - When a user decides to finish building their team then they exit the application, and the HTML is generated.
  - Call the `render` function (provided for you) and pass in an array containing all employee objects;
    - The `render` function will generate and return a block of HTML including templated divs for each employee!
  - Create an HTML file using the HTML returned from the `render` function.
    - Write it to a file named `team.html` in the `output` folder.

---

## Usage Information

- Go to my Github repo for this project : https://github.com/Tarikcn/team-profile
- clone the repo and open in code editor
- Access the terminal
- The application will be invoked by using the following command:

```bash
node index.js
```

### Deployment Live URL

- Deployment URL :
  https://github.com/Tarikcn/readme-generator/

### Test Screenshot

-

### Screen Recording

Walkthrough video:

### Web App Screenshot

## License

- Please refer to the LICENSE in the repo.
