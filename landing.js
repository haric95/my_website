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

function draw() {
    background(170);
    x_border = 50;
    y_border = 50;
    radius = 60;
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
            ellipse(x_coord, y_coord, radius-10 + size_change, radius-10 + size_change);
            noFill();
            stroke(10);
            ellipse(x_coord+5, y_coord-8, radius-10 + size_change, radius-10 + size_change);

        }
    }

    //         const distance = dist(300,300, 75 + 50*i, 75  + 50 * j);
    //         noStroke();
    //         fill(200-j*30, 40, 100-i*15   + 100*abs(sin(inp/6)));
    //         ellipse(std_radius + 50*i  + 10*sin(inp), std_radius  + 50 * j + 2*sin(inp*2.5), 25 - distance/30*sin(inp)*cos(distance) - 6*sin(inp*3 + i), 25 -  i*50/30*sin(inp)*cos(distance)*cos(inp*3 + j) );
    //         noFill();
    //         stroke(200-mouseX/100);
    //         // ellipse(70 + 0.02*distance + 50*i, 70 - 0.02*distance  + 50 * j, 25 - distance/30*sin(inp)*cos(distance) - 6*sin(inp*3 + i), 25 -  i*50/30*sin(inp)*cos(distance)*cos(inp*3 + j) );
    //     }
    // }

    
    inp += PI / 60;
}