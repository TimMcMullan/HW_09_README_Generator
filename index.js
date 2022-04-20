// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// Lines above and below came with the starting code 
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'TITLE-What is the title of your project?',
            name: 'projtitle',
        },
        {
            type: 'input',
            message: 'DESCRIPTION-Give a description of your project:',
            name: 'projdescription',
        },
        {
            type: 'input',
            message: 'Please give installation instructions for your project:',
            name: 'installinstructions',
        },
        {
            type: 'input',
            message: 'USAGE-Please explain how your project can be used to benefit the user:',
            name: 'usageinfo',
        },
        {
            type: 'input',
            message: 'LICENSE-Please enter license information (i.e. link) below.',
            name: 'licenseinfo',
        },
        {
            type: 'input',
            message: 'CONTRIBUTOR-Please list contributors to your project. Separate each contributor with a comma (,):',
            name: 'contributors',
        }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
