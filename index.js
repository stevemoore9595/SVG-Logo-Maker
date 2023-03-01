// Packages needed for this application
import inquirer from 'inquirer';
import { Circle, Square, Triangle } from './lib/shapes';


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

// Function to initialize the app
inquirer.prompt(questions) 
    .then((data) => {
    if ('data.Triangle' === shape) {
        return Triangle
    } else if ('data.Circle' === shape) {
        return Circle
    } else {
        return Square
    }
});