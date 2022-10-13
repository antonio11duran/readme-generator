// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the project title?",
    "What is the project's description?",
    "Any installation instructions?",
    "How can this project be used?",
    "Would you like to add any contributions?",
    "Test instructions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = 'README.md';
    const data = '';

    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('HTML File Created!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: 'Where are you from?',
                name: 'location',
            },
            {
                type: 'input',
                message: 'What is you github username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your LinkedIn url?',
                name: 'linkedin',
            },
        ])
}

// Function call to initialize app
init();
