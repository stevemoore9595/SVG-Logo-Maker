class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}

class Triangle extends Shape {
    renderTriangle() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    renderCircle() {
        return `<circle cx="25" cy="75" r="20 fill="${this.color}" stroke-width="5"/>`
    }
}

class Square extends Shape {
    renderSquare() {
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}" stroke-width="5"/>`
    }
}



module.exports = {Triangle, Circle, Square};

