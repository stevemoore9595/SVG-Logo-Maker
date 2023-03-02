// Packages needed for this application
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';
const fs = require('fs');

// An array of questions for user input
const questions = [{
    type: 'input',
    message:'Enter up to three characters',
    name:'Text'
}, {
    type: 'input',
    message:'Enter a text color',
    name:'Text-Color'
}, {
    type: 'list',
    message:'Choose a shape from the list',
    name:'Shape',
    choices: ['Triangle', 'Circle', 'Square']
}, {
    type: 'input',
    message:'Enter a shape color',
    name:'Shape-color'
}];
// Function to create the logo
function writeToFile(filename, data) {

    fs.writeFile(filename, {Triangle, Circle, Square}(data), error => {
        if (error) {
           return console.log(error)
        } else {
            console.log('Generated logo.svg')
        }
    });
};
// Function to initialize the app
inquirer.prompt(questions) 
    .then((data) => {
    if ('data.Triangle' === Shape) {
        return Triangle
    } else if ('data.Circle' === Shape) {
        return Circle
    } else {
        return Square
    } 
});

function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        writeToFile('logo.svg', data);
        console.log(data);
    }); 
};

init()