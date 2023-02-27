// Packages needed for this application
const inquirer = require('inquirer');
const shapes = require('./libs/shapes.js')

// An array of questions for user input
const questions = [{
    type: 'input',
    message:'Enter up to three characters',
    name:'Text'
}, {
    type: 'input',
    message:'Enter a text color',
    name:'Text Color'
}, {
    type: 'list',
    message:'Choose a shape from the list',
    name:'Shape'
}, {
    type: 'input',
    message:'Enter a shape color',
    name:'Shape color'

}];
// Function to create the logo

// Function to initialize the app