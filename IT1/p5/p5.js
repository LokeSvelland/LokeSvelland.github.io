var x = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {
    x = x + 1;
    ellipse(10 + x, 10 + x, 50);
}