// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = () => {
    const seperate = new inquirer.Separator()
    // Use inquirer to prompt questions
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required for instaling this project?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a installation description');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description');
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you want your project to have?',
            choices: ['Apache', seperate, 'AGPL', seperate, 'GPL', seperate, 'LGPL', seperate, 'MIT', seperate, 'Mozilla', seperate, 'Unlicense', seperate, 'None', seperate,],
            default: 'None',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How should tests be run?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'What does the user need to know about contributing to this project?',
        }
    ])
};

// Function to write README file using file system
const writeToFile = data => {
    fs.writeFile('README.md', data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}


// Function to initialize app
const init = () => {
    questions()
        // Get user answers
        .then(answers => {
            return generateREADME(answers);
        })
        // Use data to display on page
        .then(data => {
            return writeToFile(data);
        })
        // Catch errors
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();

