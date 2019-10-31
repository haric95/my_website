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
indices = fy_shuffle(indices)
let selected;

let frequencies = [440.00, 493.88, 554.37, 587.33, 659.25, 739.99, 830.61, 880.00];
let key_mapping = {0: 0,18: 1,3: 2,5: 3,6: 4,7: 5,9: 6,10: 7}
let frequency;
let sorted = false;
console.log(indices);

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);
    frameRate(60);
    blendMode(HARD_LIGHT);
    colorMode(HSB, 100);
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
    max_radius = max_diameter / 2;
    for (i = 0; i < 8; i++) {
        index = indices[i]
        noStroke();
        fill(0+5*i);
        let pos_x = x_border / 2 + max_radius + index*max_diameter;
        let pos_y = windowHeight / 2 + 15*sin(inp + i/2);
        smooth();
        ellipse(pos_x, pos_y, max_radius - 30, max_radius - 30);
        noFill();
        stroke(30);
        strokeWeight(1)
        if (selected == index) {
            strokeWeight(5);
            stroke(10)
        }
        offset = max_radius / 2
        ellipse(pos_x + 10, pos_y - 10, max_radius - 30, max_radius - 30);
    }
    inp += PI/120;
}

function fy_shuffle(arr) {
    let output = [];

    while (arr.length > 0) {
        index = Math.floor(Math.random()*arr.length);
        output.push(arr[index]);
        arr.splice(index, 1)
    }
    return output;
};

function bubble_sort_pass(indices) {
    for (i = 0; i < indices.length - 1; i++) {
        if (indices[i] > indices[i+1]) {
            const temp = indices[i];
            indices[i] = indices[i+1];
            indices[i+1] = temp;
        }
    }
}

function swap_circles(index_1, index_2) {

}

function keyPressed() {
    let keyIndex = -1;
    if (key >= 'a' && key <= 'z') {
      keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
    } else if (key == " "){
        bubble_sort_pass(indices);
    }
    if (keyIndex in key_mapping) {
        selected = key_mapping[keyIndex];
        console.log(indices[selected]);
        frequency = frequencies[indices[selected]];
        if (! sorted) {
            frequency += (Math.random()*15)
        }
        triOsc.freq(frequency);
        env.play();
    }
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