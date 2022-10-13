// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is the project title?",
    "What is the project's description?",
    "Any installation instructions?",
    "How can this project be used?",
    "Would you like to add any contributions?",
    "Test instructions?",
    "Which license did you use?"];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    const fileName = 'README.md';
    const data = generateMarkdown(response);

    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README Created!')
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
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            }, {
                type: 'input',
                message: questions[4],
                name: 'contributers',
            }, {
                type: 'input',
                message: questions[5],
                name: 'test',
            }, {
                type: 'expand',
                message: questions[6],
                choices: ["None", "Apache", "GNU GPL 3.0", "GNU GPL 2.0", "GNU LGPL", "MIT", "BSD 2", "BSD 3", "Boost", "Creative Commons", "Eclipse", "GNU Affero", "Mozilla", "Unlicense"],
                default: "None",
                name: 'license',
            },
        ])
        .then(writeToFile(response))
}

// Function call to initialize app
init();
