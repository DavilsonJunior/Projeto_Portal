var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 2000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0; i<objs.length; i++) { //ou for(var i in objs){}
    objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor ="#ccc";
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor ="blue";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	document.getElementsByClassName("bolinha")[0].style.backgroundColor ="#ccc";
	document.getElementsByClassName("bolinha")[1].style.backgroundColor ="#ccc";
	document.getElementsByClassName("bolinha")[2].style.backgroundColor ="#ccc";
	document.getElementsByClassName("bolinha")[3].style.backgroundColor ="#ccc";
	document.getElementsByClassName("bolinha")[slideItem].style.backgroundColor ="blue";
}

function toggleMenu() {
	var menu = document.getElementById("menu");

	if(menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = 'block';
	}
	else {
		menu.style.display = 'none';
	}
}