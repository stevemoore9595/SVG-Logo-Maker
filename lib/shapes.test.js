const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () => {
    test('renders', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Circle', () => {
    test('renders', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="${this.color}" stroke-width="5"/>');
    })
})
describe('Square', () => {
    test('renders', () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect x="85" y="50" rx="0" ry="0" width="125" height="125" fill="${this.color}" stroke-width="5"/>');
    })
})

