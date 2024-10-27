//Selections
const infoTitle = document.getElementById('info-title');
const textDescription = document.getElementById('text-description');
const planets_bar = document.getElementById("planets_bar");
const page = document.querySelector('.page');
const title = document.getElementById('title');
const button = document.getElementById('intro-button');


const planets = [{
	name : "Mercury",
	icon: "icons/Mercury.svg",
	img: "images/Mercury/mercury.jpg"
},
{
	name : "Venus",
	icon: "icons/Venus.svg",
	img: "images/Venus/venus.jpg"
},
{
	name : "Earth",
	icon: "icons/Earth.svg",
	img: "images/Earth/earth.jpg"
},
{
	name : "Mars",
	icon: "icons/Mars.svg",
	img: "images/Mars/mars.jpg"
},
{
	name : "Jupiter",
	icon: "icons/Jupiter.svg",
	img: "images/Jupiter/jupiter.jpg"
},
{
	name : "Saturn",
	icon: "icons/Saturn.svg",
	img: "images/Saturn/saturn.jpg"
},
{
	name : "Uranus",
	icon: "icons/Uranus.svg",
	img: "images/Uranus/uranus.jpg"
},
{
	name : "Neptune",
	icon: "icons/Neptune.svg",
	img: "images/Neptune/neptune.jpg"
},
]


//query string
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

for (let i = 0; i < planets.length; i++) {
	planets_bar.innerHTML += '<a href="planets.html?id=' + i + '" class="nav-link"><img src="' + planets[i].icon + '"></a>';
}

const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
    if (i == id) {
        navLinks[i].classList.add('active');
    }
}

	let planet_name = planets[id].name;
	title.innerHTML = planet_name;

	const imageSource = "url('" + planets[id].img + "')"; 
	page.style.backgroundImage = imageSource;

	const documentTitle = 'AstroVision' + ' - ' + planet_name;
	document.title = documentTitle;

	
	/*
	function getNextPlanet(currentIndex) {
		const nextIndex = (currentIndex + 1) % planets.length;
		return planets[nextIndex];
	}

	const currentPlanetIndex = 0;
	const nextPlanet = getNextPlanet(currentPlanetIndex);
	console.log(nextPlanet.name);

	function nextPage(){
	window.location.href='<a href="planets.html?id=' + i + '"></a>';
	}

	button.innerText = 'Next Planet: ' + nextPlanet.name;
	button.addEventListener('click', nextPage);
*/

const planet_url = 'https://api.api-ninjas.com/v1/planets?name=' + planet_name;

const apiKey = 'm0zJKdHhMDITDHK5rVNqhQ==saFSGHkugOxxrO3f';

//Fetching
fetch(planet_url, {
	headers: {
		'X-Api-Key': apiKey,
	}
	}).then(function(response){
		if (!response.ok) {
			return 'Network response was not ok';
		}
		return response.json();
	}).then(function(data){
		data.forEach(function (info) {
			//console.log(data);
			infoTitle.innerHTML = 'Details';
			textDescription.innerHTML = 
			'Name: ' + info.name +"<br>"+ 
			'Mass: ' + info.mass +"<br>"+
			'Radius: ' + info.radius +"<br>"+
			'Period: ' + info.period +"<br>"+
			'Semi Major Axis:: ' + info.semi_major_axis +"<br>"+
			'Temperature: ' + info.temperature +"<br>"+
			'Distance Light Year: ' + info.distance_light_year +"<br>"+
			'Host Star Mass: ' + info.host_star_mass +"<br>"+
			'Host Star Temperature: ' + info.host_star_temperature;
		})
	}).catch(function (error) {
		console.log(error);
	});
