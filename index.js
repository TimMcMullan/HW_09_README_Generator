// Needed packages
const inquirer = require("inquirer");
const fs = require("fs");

// The interview: Gathering information for the README.md

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
            },
            {
                type: 'input',
                message: 'Email Address',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Phone Number',
                name: 'phone',
            },
            {
                type: 'input',
                message: 'github repository',
                name: 'repo',
            },
        ])
};

// function to combine information input and create README.md
const generateMD = ({ projtitle, projdescription, installationinstructions, licenseType, usageinfo, contributors, email, phone, repo}) =>

    `# ${projtitle}

## Table of Contents
1. [Description](#description)
2. [Installation Instructions](#installation-instructions)
3. [Usage](#usage)
4. [License](#license)
5. [License Badge](#license-badge)
6. [License Link](#license-link)
7. [Contributors](#contributors)
8. [Questions and Contact Information](#questions-and-contact-information)


## Description : 
${projdescription}

## Installation Instructions :
${installationinstructions}

## Usage :
${usageinfo}

## LICENSE : 
${renderLicenseSection(licenseType)}


## LICENSE BADGE :
${renderLicenseBadge(licenseType)}

## LICENSE LINK :
${renderLicenseLink(licenseType)}

## Contributors :
${contributors}

## Questions and Contact Information :
${email}
${phone}
${repo}`;

// function to initialize app 
const init = () => {
    promptuser()
        .then((data) => fs.writeFileSync('README.md', generateMD(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};


// returns license badge if it exists, otherwise, nothing
function renderLicenseBadge(license) {
    if (license != "") {
        return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else {
        return "";
    }
}

// returns license link if it exists, otherwise, nothing
function renderLicenseLink(license) {
    if (license != "") {
        return `https://img.shield.io/license-${license}-blue.svg`;
        console.log("link");
        console.log(link);
    } else {
        return "";
    }
}

// returns license type if it exists, otherwise, nothing
function renderLicenseSection(teddybear) {
    if (teddybear != "") {
        return teddybear;
    } else {
        return "";
    }
}

// calls function to initialize application
init();