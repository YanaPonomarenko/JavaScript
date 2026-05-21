class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    info() {
        return "Rectangle: width = " + this.width + ", height = " + this.height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

export default Rectangle;