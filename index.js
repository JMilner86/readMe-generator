const { write } = require('fs');
const inquirer = require('inquirer');
const writeFile = require('./utils/generateMarkdown.js');


const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message:'Enter a title for your README.md file (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a title');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your file (Required)',
            validate: descInput => {
                if (descInput) {
                  return true;
                } else {
                  console.log('Please enter a description of your program');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please list the command(s) needed to install program (Required)',
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please list the commands necessary or N/A');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for users (Required)',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter usage information');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution information for users (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                  return true;
                } else {
                  console.log('Please enter contribution information/rules');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter instructions to test program'
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Please choose a license (Required)',
            choices: [
                'None',
                'AGPL-3.0',
                'GPL-3.0',
                'LGPL-3.0',
                'MPL-2.0',
                'Apache-2.0',
                'MIT',
                'BSL-1.0',
                'Unlicense'
            ],
            validate: licensesInput => {
                if (licensesInput) {
                  return true;
                } else {
                  console.log('Please select an option');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email to be contacted for additional questions (Required)',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email address');
                  return false;
                }
              }
        }
    ])
};




// Function call to initialize app
init()
.then(writeFile);
