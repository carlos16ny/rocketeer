var asteroids;
var flameballs;
var earthImage;
var erathImageReal;
var pilot;
var corpo;
var spot;
var point;
var rocketContainer;
var rocket;
var cloud;
var mountain;
var cloudX = [0.5, 1.8, 0.7, 3, 1.5, 3.4];
var cloudY = [1, 1.5, 2.2, 1, 3, 2];
var messages;

var index = 0;

function setup(){

	noCanvas();

	// canvas = createCanvas(windowWidth, windowHeight/2);
	// canvas.background('rgba(155, 155, 155, 0.3)');
	// canvas.parent('canvasAviao');
	// canvas.position(0, windowHeight);
	// canvas.style("position", "relative");

	mountain = select("#mountain");
	asteroids = selectAll('.asteroids');
	flameballs = selectAll('.flameballs');
	earthImage = select('#earthBall');
	pilot = select('#lostpilot');
	corpo = select('#corpo');
	spot = selectAll('.spot');
	point = selectAll('.pointc');
	rocketContainer = select('#rocket-container');
	rocket = select("#rocket");
	cloud = selectAll('.cloud');
	erathImageReal = select("#earthImage");
	messages = selectAll(".dialog");

	var sizeX = windowWidth;
	var sizeY = windowHeight;

	earthImage.style("width", '100%');
	earthImage.style("height", sizeX + 'px');
	earthImage.style("top", 0 - sizeX/2 + 'px');

	erathImageReal.style("height", sizeX + 'px');

	pilot.style("width", sizeX/5 + 'px');
	pilot.style("height", sizeX/5 + 'px');
	pilot.style("left", sizeY - 2*sizeX/5 + 'px');
	pilot.style("transform", 'scale(4)');

	rocketContainer.style("left", sizeX/2 - rocketContainer.width/2 + 'px');
	rocketContainer.style("top", sizeY/2 - rocketContainer.height/2 + 'px');
	rocketContainer.style("transform", "scale(" + rocketContainer.height / sizeY / 1.5 + ")");
	if(sizeY<800){
		rocketContainer.style("transform", "scale(" + rocketContainer.height / sizeY / 3 + ")");
	}


	rocket.style("left", sizeX/2 - rocket.width/2  + 'px');
	rocket.style("top", sizeY/2 - rocket.height/2 + 'px');

	mountain.style("width", sizeX + 'px');
	mountain.style("height", sizeY/2 + "px");
	mountain.style("top", sizeY*2 - 200 + 'px');


	for(var i=0; i<spot.length; ++i){
		spot[i].style("top", sizeY*(i+1) - sizeY/2 - sizeX/15/2 - 10 + 'px');
		spot[i].style("width", sizeX/15 + 'px');
		spot[i].style("height", sizeX/15 + 'px');
		spot[i].style("left", sizeX/2 - sizeX/15/2 + 'px' );
	}

	for(var i=0; i<point.length; ++i){
		point[i].style("width", sizeX/35 + 'px');
		point[i].style("height", sizeX/35 + 'px');
		point[i].style("top", sizeX/15/2 - sizeX/35/2 + 'px' );
	}

	for(var i=0 ; i<asteroids.length; ++i){
		asteroids[i].style("width", sizeX/13 + 'px');
		asteroids[i].style("height", sizeX/13 + 'px');
		flameballs[i].style("width", sizeX/13 + 'px');
		flameballs[i].style("height", sizeX/13 + 'px');
	}

	for(var i=0 ; i<asteroids.length; ++i){
		asteroids[i].style("top",   sizeY*3/16 *+ random(0,10) + "px");
		asteroids[i].style("left",  sizeX/8 *+ random(0,10) + "px");
		flameballs[i].style("top",  sizeY*3/8 *+ random(0,10) + "px");
		flameballs[i].style("left", sizeX/8 *+ random(0,10) + "px");
	}

	for(var i=0; i<cloud.length; ++i){
		cloud[i].style("transform", 'scale(' + sizeX/100 );
		cloud[i].style("top", sizeY*2 / 4 * cloudY[i] + "px");
        cloud[i].style("left", sizeX / 4 * cloudX[i] + "px");
	}

}


function keyPressed(){

	$("#dialog-" + index).hide(2000);
	$("#corpo").delay(2000).animate({
		scrollTop: windowHeight * index  + 'px' 
	}, 3000);
	index++;
	$("#dialog-" + index).delay(6000).slideToggle(2000);	



}