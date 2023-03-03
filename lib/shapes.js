class Shape {
    constructor() {
        this.color = ''
        this.textColor = ''
        this.text = ''
    }
    setColor(color) {
        this.color = color
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setText(text) {
        this.text = text
    }

}

class Triangle extends Shape {
    renderTriangle() {
        return `<svg version="1.1" height='300' width='300' xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="150" text-anchor='middle' fill='${this.textColor}'
        >${this.text}</text></svg>`
    }
}

class Circle extends Shape {
    renderCircle() {
        return `<svg version="1.1" height='300' width='300' xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="20 fill="${this.color}" stroke-width="5"/><text x="150" y="150" text-anchor='middle' fill='${this.textColor}'
        >${this.text}</text></svg>`
    }
}

class Square extends Shape {
    renderSquare() {
        return `<svg version="1.1" height='300' width='300' xmlns="http://www.w3.org/2000/svg"> 
        <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}" stroke-width="5"/><text x="150" y="150" text-anchor='middle' fill='${this.textColor}'
        >${this.text}</text></svg>`
    }
}


module.exports = { Shape, Triangle, Circle, Square }
