// Define the number of cats
const NUM_CATS = 10;

// Names of cats
const CAT_NAMES = ["George", "Piccolo", "Adam", "Blue",
									 "Hazel", "Lucho", "Momo", "Doji",
									 "Gon", "Porto", "Polo", "Gato"];

// Cat image URLs
const CAT_IMG_URLS = ["https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
											"https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
											"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/20787/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
											"https://images.pexels.com/photos/315582/pexels-photo-315582.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"];

// Array of 0s to keep track of number of clicks
var counters = Array(NUM_CATS).fill(0);

// Loop through cats and insert elements into the DOM; use let to circumvent closure implementation
for (let i = 0; i < NUM_CATS; i++) {
	var currentNumber = counters[i];
	var currentName = CAT_NAMES[i];
	var currentURL = CAT_IMG_URLS[i];

	// Name, image, and clicker info HTML
	var nameCode = `<h1 class="display-5 my-3">Click <span class="text-primary">${currentName}</span>!</h1>`;
	var imageCode = `<img src="${currentURL}" class="img-fluid rounded mx-auto d-block cat-img" id="cat-pic-${i}" alt="Picture of ${currentName}">`;
	var clickerCode = `<h3 class="my-1">Times clicked:</h3><p class="display-4 text-primary" id="counter-${i}">0</p>`;

	// Make the first cat shown to user by default
	if (i === 0) {
		$('#list-tab').append(`<a class="list-group-item list-group-item-action active" id="list-${currentName}-list" data-toggle="list" href="#list-${currentName}" role="tab" aria-controls="${currentName}">${currentName} (<span id="num-${i}">0</span>)</a>`);
		$('#nav-tabContent').append(`<div class="tab-pane fade show active" id="list-${currentName}" role="tabpanel" aria-labelledby="list-${currentName}-list">${nameCode}${imageCode}${clickerCode}</div>`);
	} else {
		$('#list-tab').append(`<a class="list-group-item list-group-item-action" id="list-${currentName}-list" data-toggle="list" href="#list-${currentName}" role="tab" aria-controls="${currentName}">${currentName} (<span id="num-${i}">0</span>)</a>`);
		$('#nav-tabContent').append(`<div class="tab-pane fade" id="list-${currentName}" role="tabpanel" aria-labelledby="list-${currentName}-list">${nameCode}${imageCode}${clickerCode}</div>`);
	}

	// Attach event handlers and update click display accordingly
	$(`#cat-pic-${i}`).click(function() {
		counters[i]++;
		$(`#counter-${i}`).text(counters[i]);
		$(`#num-${i}`).text(counters[i]);
	});

}