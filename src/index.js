import './css/styles.css'
import './css/ilhanaiev.css'
import './css/circles-effect.css'
import './css/header-title.css'
import './css/about.css'

window.onload = init;

function init(){
	var home = document.getElementById("list"),
		about = document.getElementById("about"),
		contacts = document.getElementById("contacts"),
		homeBut = document.getElementsByClassName("homeBut"),
		aboutBut = document.getElementsByClassName("aboutBut"),
		contactsBut = document.getElementsByClassName("contactBut");

	var showHome = function() {
		home.style.display = "flex";
		about.style.display = "none";
		contacts.style.display = "none";
	}

	var showAbout = function() {
		home.style.display = "none";
		about.style.display = "grid";
		contacts.style.display = "none";
		
		imgProportions();
	}

	var showContacts = function() {
		home.style.display = "none";
		about.style.display = "none";
		contacts.style.display = "block";
	}

	for (let i in homeBut){
		if (typeof(homeBut[i]) === 'object') homeBut[i].addEventListener('click', showHome);
	}
	for (let i in aboutBut){
		if (typeof(aboutBut[i]) === 'object') aboutBut[i].addEventListener('click', showAbout);
	}
	for (let i in contactsBut){
		if (typeof(contactsBut[i]) === 'object') contactsBut[i].addEventListener('click', showContacts);
	}

}

//window.onresize = imgProportions;
window.onresize = function(){
	var about = document.getElementById("about");
	if (about.style.display === 'grid') return imgProportions()
}

//aboutme images proportions
function imgProportions(){
	console.log('active');
	var imgsAbout = document.getElementsByClassName("img");
	for (let i in imgsAbout){
		if (typeof(imgsAbout[i]) === 'object'){
			imgsAbout[i].style.height = imgsAbout[i].clientWidth + 'px';
		}
	}
}