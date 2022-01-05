let myArrow, dy, dx;

function setup() {
    createCanvas(500, 500); //creating the canvas to draw to
    myArrow = new Arrow(width / 2, height / 2, 0); //creates a new arrow and takes the parameters from the Arrow.js ClassFile
}

function draw() {

    background(50, 50, 250); //sets the background colour
    myArrow.updateValues(); //updates the values for the arrow
    myArrow.drawArrow(); // then draws the updated values onto the canvas
}