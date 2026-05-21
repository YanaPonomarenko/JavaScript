class Square {
    constructor(side) {
        this.side = side;
    }

    info() {
        return "Square: side = " + this.side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
}

export default Square;