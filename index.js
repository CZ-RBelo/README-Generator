const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [

];


// function to write README file
inquirer
    .prompt([
          {
            type: 'email',
            message: 'Please, enter your email adress',
            name: 'email',
          },
          {
            type: 'input',
            message: 'Please, enter your github id?',
            name: 'github',
          },
          {
            type: 'input',
            message: 'Please, enter your linkedin id?',
            name: 'linkedin',
          },
        {
            type: 'input',
            message: 'Please, enter the title of your project: ',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Please, enter the description of your project: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please, enter the installation instructions: ',
            name: 'instalation',
        },
        {
            type: 'input',
            message: 'Please, enter the usage information: ',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please, enter the contribution guidelines: ',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please, enter the test instructions: ',
            name: 'tests',
        },

        {
            type: 'list',
            message: 'Please, chose the license: ',
            name: 'license',
            choices: ['The MIT License', 'Apache 2.0 License', 'GNU GPL v3', 'BSD 3-Clause License', 'None']
        },
    ])

    .then((responses) => writeToFile('README.md', generateFILE(responses)))
    .then(() => console.log('Good news, your profissional high-quality README File was created with success!'))
    .catch((err) => console.error(err));

//const licenseChosed = ""


// Case list

/*

The MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Apache 2.0 License
License
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

GNU GPL v3

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

BSD 3-Clause License

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
*/



const generateFILE = (responses) =>
    `
## ${responses.project}

## Table of Contents

* [Project description](#description)
* [Process of installation](#instalation)
* [Contributing](#contributing)
* [Contacts](#contacts)
* [License](#license)

### Description 

${responses.description}

### Instalation 

${responses.instalation}

### Usage 

${responses.usage}

### Contributing

> ${responses.contributing}

### Tests

> ${responses.tests}

### Contacts

If you require any further information, feel free to contact me at:

* Github Profile: [${responses.github}](https://github.com/${responses.github}/)
* Email: [${responses.email}](mailto:${responses.email})
* LinkedIn: [${responses.linkedin}](https://linkedin.com/in/${responses.linkedin})
---
### License
Licensed under the    
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clauseruibelo
`;

// function to initialize program
function init() {

}

// function call to initialize program
init();