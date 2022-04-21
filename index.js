// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
            message: 'DESCRIPTION-Give a single paragraph description of your project:',
            name: 'projdescription',
        },
        {
            type: 'input',
            message: 'Please give installation instructions for your project:',
            name: 'installinstructions',
        },
        {
            type: 'input',
            message: 'USAGE-Please explain, in a single paragraph, how your project can be used to benefit the user:',
            name: 'usageinfo',
        },
        {
            type: 'list',
            message: 'LICENSE-What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'CONTRIBUTOR-Please list contributors to your project. Separate each contributor with a comma (,):',
            name: 'contributors',
        }
]);
const generateMD = ({ installinstructions, usageinfo, license, contributors }) =>

`#${projectdescription}

## INSTALLATION INSTRUCTIONS: ${installationinstructions}

## USAGE: ${usafeinfo}

## LICENSE :${license}

## CONTRIBUTORS :${contributors}`


.then((data) => {
    const mdPageContent = generateMD(data);

        fs.writeFile('README.md', mdPageContent, (err) =>
            err ? console.log(err):
            console.log('Markdown file created!')
            );
});
//     let filename = `${data.projtitle.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'),(err) =>
//     err ? console.log(err) : console.log('Success!')
//     );
// }).catch((err)=>{
//     if(err) throw err;
    
// }),

// TODO: Create a function to write README file
// fs.writeToFile("README.md", data) { }

// TODO: Create a function to initialize app
const init = () =>{
    prompt();
 }

// Function call to initialize app
init();
