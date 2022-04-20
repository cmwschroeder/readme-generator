// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'githubName',
    message: 'Enter your github username: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the email to contact you about this project: ',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your directory?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a short description for your project: ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL', 'BSD 3', 'None'],
  },
  {
    type: 'confirm',
    name: 'tableOfContents',
    message: 'Would you like a table of contents?',
    default: false,
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter any installation instructions for your project: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions for your project: ',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Enter any contribution guidelines for your project: ',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter any test instructions for your project: ',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const text = generateMarkdown(data);
  fs.writeFile(fileName, text, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("file written");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((answers) => {
        //process and do something with the answers.
        writeToFile("GENERATED.md", answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("Error with inputs")
          }
    })
}

// Function call to initialize app
init();