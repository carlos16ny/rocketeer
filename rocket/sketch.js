var asteroids;
var flameballs;
var earthImage;
var pilot;
var corpo;
var spot;
var point;
var rocketContainer;
var rocket;


function setup(){

	noCanvas();

	asteroids = selectAll('.asteroids');
	flameballs = selectAll('.flameballs');
	earthImage = select('#earthImage');
	pilot = select('#lostpilot');
	corpo = select('#corpo');
	spot = selectAll('.spot');
	point = selectAll('.pointc');
	rocketContainer = select('#rocket-container');
	rocket = select("#rocket");

	var sizeX = windowWidth;
	var sizeY = windowHeight;

	earthImage.style("width", '100%');
	earthImage.style("height", sizeX + 'px');
	earthImage.style("top", 0 - sizeX/2 + 'px');

	pilot.style("width", sizeX/5 + 'px');
	pilot.style("height", sizeX/5 + 'px');
	pilot.style("left", sizeY - 2*sizeX/5 + 'px');
	pilot.style("transform", 'scale(4)');

	rocketContainer.style("left", sizeX/2 - 512/2 + 'px');
	rocketContainer.style("transform", 'scale(' + 1/sizeX*500);

	rocket.style("left", sizeY/5/5  + 'px');

	for(var i=0; i<spot.length; ++i){
		spot[i].style("top", sizeY*(i+1)-sizeX/15 - 10 + 'px');
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
		asteroids[i].style("top",   + sizeY*3/16 *+ random(0,10) + "px");
		asteroids[i].style("left",  + sizeX/8 *+ random(0,10) + "px");
		flameballs[i].style("top",  + sizeY*3/8 *+ random(0,10) + "px");
		flameballs[i].style("left", + sizeX/8 *+ random(0,10) + "px");
	}

}
