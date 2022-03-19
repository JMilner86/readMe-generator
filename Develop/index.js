const inquirer = require('inquirer');


const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message:'Enter a title for your README.md file (Required)',
            validate: descInput => {
                if (descInput) {
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
            validate: descInput => {
                if (descInput) {
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
            validate: descInput => {
                if (descInput) {
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
            validate: descInput => {
                if (descInput) {
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
            validate: descInput => {
                if (descInput) {
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
            validate: descInput => {
                if (descInput) {
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
            validate: descInput => {
                if (descInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email address');
                  return false;
                }
              }
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
init();


// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README