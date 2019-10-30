var inp = 0

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    // canvas.style("z-index", "-1")
    ellipseMode(RADIUS);
    frameRate(60);
    blendMode(HARD_LIGHT);
}

function windowResized() {
    background(150);
    distance = 0;
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    fill(0,0,150);
}

function draw() {
    background(180);
    x_border = 50;
    y_border = 50;
    radius = 80;
    diameter = radius*2;
    num_x = Math.floor((windowWidth - x_border) / (diameter));
    num_y = Math.floor((windowHeight - y_border) / (diameter));
    x_offset = x_border/2 + ((windowWidth - x_border) % diameter) / 2;
    y_offset = y_border/2 + ((windowHeight - y_border) % diameter) / 2;
    noStroke();
    for (i = 0; i < num_x; i++) {
        for (j = 0; j < num_y; j++) {
            fill(170 - i*10,120 - j*3,180);
            x_coord = (x_offset) + radius + i*radius*2
            y_coord =  (y_offset) + radius + j*radius*2
            var distance = dist(mouseX, mouseY, x_coord, y_coord);
            var size_change = 20*(sin(-inp + distance/100));
            ellipse(x_coord, y_coord, radius-distance/15 + size_change, radius-distance/15 + size_change);
            noFill();
            stroke(10);
            ellipse(x_coord+5, y_coord-8, radius-distance/15 + size_change, radius-distance/15 + size_change);

        }
    }
    inp += PI / 60;
}