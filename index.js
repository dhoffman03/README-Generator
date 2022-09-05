// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = () => {
    // Use inquirer to prompt questions
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email adress?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required for instaling this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you want your project to have?',
            choices: ['Apache License 2.0','Boost Software License 1.0','GNU AGPLv3','GNU GPLv3','GNU LGPLv3','MIT License','Mozilla Public License 2.0','The Unlicense',],
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

