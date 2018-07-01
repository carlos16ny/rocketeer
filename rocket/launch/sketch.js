let input1, input2, button, label;
var rocket;

function preload() {
    rocket = loadImage('rocket.png', function(){console.log("ok")}, function(){console.log("not ok")} );
}

function setup(){

    angleMode(DEGREES);

    createCanvas(windowWidth, windowHeight);
    input1 = createInput();
    input1.position(windowWidth/2 - input1.width/2, 50);
    input2 = createInput();
    input2.position(windowWidth/2 - input2.width/2, 80);
    label = createP('Digite a angulação e a velociadade inicial');
    label.position(windowWidth/2 - 100, 5);
    label.style("color", "white");
    button = createButton('Lançar');
    button.position(windowWidth/2 - button.width/2, 110);

}


function draw(){
    background(51);
}
