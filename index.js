// Packages needed for this application

const { fstat } = require("fs");
const inquirer = require("inquirer");

// Define an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description of your project:',
        name: 'descr'
    },
    {
        type: 'input',
        message: 'What are the steps rquired to install your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your collaborators with links to their github profiles:',
        name: 'collabs',
    },
    {
        type: 'input',
        message: 'List any third-party assets that require attribution. List the creators with links to their primary web presence.',
        name: 'assets',
    },
    {
        type: 'input',
        message: 'Include links to tutorials.',
        name: 'tutorials',
    },
    {
        type: 'list',
        message: 'Choose your license for this project:',
        name: 'license',
        choices: ['Academic Free License v3.0', 
        'Apache license', 
        'Artistic license 2.0', 
        'Boost Software License 1.0', 
        'BSD 2-clause "Simplified"', 
        'BSD 3-clause "New"', 
        'BSD 3-clause Clear', 
        'Creative Commons', 
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',
        'Creative Commons Attribution Share Alike 4.0',
        'Do What The F*ck You Want To Public License',
        'Educational Community License v2.0',
        'Eclipse Public 1.0',
        'Eclipse Public 2.0',
        'European Union Public License 1.1',
        'GNU Affero General Public License v3.0',
        'GNU GPL',
        'ISC',
        'LaTeX Project Public License v1.3c',
        'Microsoft Public License', 
        'MIT', 
        'Mozilla Public License 2.0',
        'Open Software License 3.0',
        'PostgreSQL License 1.1',
        'SIL Open Font License 1.1',
        'University of Illinois/NCSA Open Source',
        'The Unlicense',
        'zLib License']
    },
];

// TODO: Define function to write README file
function writeFile(fileName, data) {
    console.log('call write to file');

}

// Define function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
            writeFile(fileName, data, (err) =>
            err ? console.log(err) : 
            console.log('Success!'))
        })
}

// Function call to initialize app
init();