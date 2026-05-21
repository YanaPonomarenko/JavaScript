import Square from "./Square.js";
import Rectangle from "./Rectangle.js";
import Triangle from "./Triangle.js";

var shapes = [
    new Square(5),
    new Rectangle(4, 7),
    new Triangle(3, 4, 5)
];

shapes.forEach(function(s) {
    console.log(s.info() + "\nArea: " + s.area() + "\nPerimeter: " + s.perimeter() + "\n");
});