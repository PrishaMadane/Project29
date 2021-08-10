class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        strokeWeight(2);
        fill("#FFC0CB");
        rect(pos.x, pos.y, this.width, this.height);

    }
}