// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

const promptuser = () => {
    return inquirer
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
                name: 'installationinstructions',
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
                name: 'licenseType',
            },
            {
                type: 'input',
                message: 'CONTRIBUTOR-Please list contributors to your project. Separate each contributor with a comma (,):',
                name: 'contributors',
            }
        ])
};
const generateMD = ({ projtitle, projdescription, installationinstructions, usageinfo, licenseType, license, contributors }) =>

    `# ${projtitle}

## DESCRIPTION: ${projdescription}

## INSTALLATION INSTRUCTIONS: ${installationinstructions}

## USAGE: ${usageinfo}

## LICENSE :${renderLicenseSection(licenseType)}

## LICENSE BADGE :${renderLicenseBadge(licenseType)}

## CONTRIBUTORS :${contributors}`;


// .then((data) => {
//     const mdPageContent = generateMD(data);

//     fs.writeFile('README.md', mdPageContent, (err) =>
//         err ? console.log(err) :
//             console.log('Markdown file created!')
//     );
// });
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
const init = () => {
    promptuser()
        .then((answers) => fs.writeFileSync('README.md', generateMD(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app

// var myBadge = renderLicenseBadge(license);



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license != "") {
        var badge = "https://img.shields.io/badge/license-" + license + "-blue.svg";
    } else {
        var badge = "";
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license != "") {
        var link = "https://img.shield.io/license-" + license + "-blue.svg";
    }
    console.log(license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    if (license != "") {
        return license;
    } else {
        return "";
    } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}
init();