function asteroidsBack(ide){
	var i = document.getElementById(ide);
	var linha;
	for(var j=0; j<10; ++j){
		linha += '<span id=asteroid' + j +  ' class="asteroids"></span>';
	}
	i.innerHTML = linha;
}
