var tick_interval = 1500;
function Tick() {
	//console.log('Tick...');
	UpdateIncome();
	UpdateAll();
};

// Data structures

var stats = {
	'resources': {
		'credits': 0,
		'fuel': 0,
		'wood': 0,
		'ore': 0
	},
	'workers': {
		'available': 10,
		'deployed': 0
	}
}

// Update Functions

function UpdateAll() {
	UpdateResources();
	UpdateWorkers();
};

function UpdateIncome() {
	//this will look at workers deployed and adjust income accordingly
};

function UpdateResources() {
	var resources = "Credits: " + stats.resources.credits + "  |  " +
					"Fuel: " + stats.resources.fuel + "  |  " +
					"Wood: " + stats.resources.wood + "  |  " +
					"Ore: " + stats.resources.ore + "<br>";
	document.getElementById("resources").innerHTML = resources;
};

function UpdateWorkers() {
	document.getElementById("workers").innerHTML = "Available: " + stats.workers.available + "<br>" +
												   "Deployed: " + stats.workers.deployed + " ";
};

// Click Functions

function DeployWorker() {
	stats.workers.available = stats.workers.available - 1;
	stats.workers.deployed = stats.workers.deployed + 1;
	UpdateAll();
};

// Storage Functions

function Save() {
	sessionStorage.setItem("stats", JSON.stringify(stats));
	console.log("Saving...");
};

function Load() {
	if (sessionStorage.getItem("stats") != "null") {
		stats = JSON.parse(sessionStorage.getItem("stats"));
	}
};

function InitLoad() {
	Load();
	Tick();
};

// Autosave

window.setInterval(function(){
	Save();
}, 10000);

// Game Loop

window.onload = InitLoad();
window.setInterval(function(){
	Tick();
}, tick_interval);

