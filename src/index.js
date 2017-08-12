import './css/styles.css'
import './css/circles-effect.css'
import './css/header-title.css'
import './css/ilhan-op.css'

var home = document.getElementById("list"),
	about = document.getElementById("about"),
	contacts = document.getElementById("contacts"),
	homeBut = document.getElementById("homeBut"),
	aboutBut = document.getElementById("aboutBut"),
	contactsBut = document.getElementById("contactBut");

var showHome = function() {
	home.style.display = "flex";
	about.style.display = "none";
	contacts.style.display = "none";
}

var showAbout = function() {
	home.style.display = "none";
	about.style.display = "block";
	contacts.style.display = "none";
}

var showContacts = function() {
	home.style.display = "none";
	about.style.display = "none";
	contacts.style.display = "block";
}

homeBut.addEventListener('click', showHome);
aboutBut.addEventListener('click', showAbout);
contactsBut.addEventListener('click', showContacts);
