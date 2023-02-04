const fs = require("fs");
// const path = require('path'); ????
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile);
let licenseChosed = "";

// function to initialize program
function init() {

    // Questions list
    inquirer
        .prompt([
            {
                type: 'email',
                message: 'Please, enter your email address:',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Please, enter your GitHub id:',
                name: 'github',
            },
            {
                type: 'input',
                message: 'Please, enter your LinkedIn link:',
                name: 'linkedin',
            },
            {
                type: 'input',
                message: 'Please, enter the title of your project:',
                name: 'project',
            },
            {
                type: 'input',
                message: 'Please, enter the description of your project:',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Please, enter the installation instructions:',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Please, enter the usage information:',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Please, enter the contribution guidelines:',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'Please, enter the test instructions:',
                name: 'tests',
            },
            {
                type: 'list',
                message: 'Please, chose the license:',
                name: 'license',
                choices: ['The MIT License', 'Apache 2.0 License', 'GNU GPL v3 License', 'BSD 3-Clause License', 'None']
            },
        ])

        .then((responses) => {

            // License Switch/ Case list
            switch (responses.license) {
                case 'The MIT License':
                    licenseChosed = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                case 'Apache 2.0 License':
                    licenseChosed = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                case 'GNU GPL v3':
                    licenseChosed = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                case 'BSD 3-Clause License':
                    licenseChosed = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                    break;
                default:
                    licenseChosed = "Check your License!";
            };

            // Function to write README file
            writeToFile('README-GEN.md', generateFILE(responses))
                .then(() => console.log('Good news, your profissional high-quality README File was created with success!'))
                .catch((err) => console.error(err))
        });
};


// Function to generate the markdown
const generateFILE = (responses) =>
    `
# ${responses.project}

## ${licenseChosed} 

## Table of Contents

* [Project description](#description)
* [Installation](#instalation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](tests)
* [Questions](#questions)
* [License](#licensed)

## Description 
${responses.description}

## Installation
${responses.installation}

## Usage 
${responses.usage}

## Contributing
${responses.contributing}

## Tests
${responses.tests}

## Questions
>If you require any further information, feel free to contact me at:    

Github Profile: [${responses.github}](https://github.com/${responses.github}/)    
Email: [${responses.email}](mailto:${responses.email})    
LinkedIn: [${responses.linkedin}](https://linkedin.com/in/${responses.linkedin})        

---

## Licensed
> Under the ${responses.license}
`;

// Function call to initialize program
init();