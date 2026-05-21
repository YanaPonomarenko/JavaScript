class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    info() {
        return "Triangle: sides = " + this.a + ", " + this.b + ", " + this.c;
    }

    area() {
        var s = this.perimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    perimeter() {
        return this.a + this.b + this.c;
    }
}

export default Triangle;