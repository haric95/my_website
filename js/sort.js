var inp = 0;
var rand_i;
var rand_j;
var num_x;
var num_y;


let attackLevel = 1.0;
let releaseLevel = 0;
let attackTime = 0.001;
let decayTime = 0.2;
let susPercent = 0.2;
let releaseTime = 0.5;
let env, triOsc;

let indices = [0,1,2,3,4,5,6,7];
shuffle(indices);

function setup() {
    console.log(shuffle(indices));
    canvas = createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);
    frameRate(60);
    blendMode(HARD_LIGHT);
    env = new p5.Envelope();
    env.setADSR(attackTime, decayTime, susPercent, releaseTime);
    env.setRange(attackLevel, releaseLevel);
    triOsc = new p5.Oscillator('sine');
    triOsc.amp(env);
    triOsc.start();
    triOsc;
    delay = new p5.Delay();
    delay.process(triOsc, .25, .4, 500);
}

function draw() {
    background(155);
    x_border = 150;
    max_diameter = Math.floor((windowWidth - x_border) / 8);
    max_radius = max_diameter /2
    for (i = 0; i < 8; i++) {
        index = indices[i]
        noStroke();
        fill(80+5*index,120,120-5*index);
        let pos_x = x_border / 2 + max_radius + index*max_diameter;
        let pos_y = windowHeight / 2 + 8*sin(inp + i/2);
        smooth();
        ellipse(pos_x, pos_y, max_radius - 30, max_radius - 30);
        noFill();
        stroke(30);
        offset = max_radius / 2
        ellipse(pos_x + 10, pos_y - 10, max_radius - 30, max_radius - 30);
    }
    inp += PI/120;
}

// class smiley {
//     constructor(smile,x, y, radius) {
//         this.smile = smile;
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }
//     display() {
//         ellipse(this.x, this.y, this.radius, this.radius)
//         if (smile) {
//             this.
//         }
//     } 

// }