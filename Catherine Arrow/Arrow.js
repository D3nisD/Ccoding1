//Arrow class
class Arrow {
    constructor(x, y, rotation) {
            //x and y properties of arrow
            this.x = x;
            this.y = y;
            //rotation of arrow
            this.rotation = rotation;
        }
        //function that draws the arrow
    drawArrow() {
        //translate from the top left corner to x and y of object
        translate(this.x, this.y);
        //rotate by rotation value of object
        rotate(this.rotation);
        line(-50, -25, 0, -25);
        line(0, -25, 0, -50);
        line(0, -50, 50, 0);
        line(50, 0, 0, 50);
        line(0, 50, 0, 25);
        line(0, 25, -50, 25);
        line(-50, 25, -50, -25);

    }

    updateValues() {

        this.dy = mouseY - this.y;
        this.dx = mouseX - this.x;
        this.rotation = atan2(this.dy, this.dx);

    }

}