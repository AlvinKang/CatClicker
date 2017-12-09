$(function() {

	// Define the number of cats (Max 12 currently)
	const NUM_CATS = 9999;

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

	class Cat {
		constructor(name, img_url, id) {
			this.name = name;
			this.img_url = img_url;
			this.id = id;				// Index of the cat in cat array
			this.clickCount = 0;
		}
	}

	var model = {
		init: function() {
			// Storage of Cat objects
			this.cats = [];

			// local variable to hold correct size after error-checking NUM_CATS
			var actualSize;

			// Error check to catch bad user inputs for NUM_CATS
			if (NUM_CATS > CAT_NAMES.length) {
				actualSize = CAT_NAMES.length;
			}
			else if (NUM_CATS < 1) {
				actualSize = 1;
			}
			else {
				actualSize = NUM_CATS;
			}

			// Fill up cats array with Cat objects
			for (var i = 0; i < actualSize; i++) {
				this.cats.push(new Cat(CAT_NAMES[i],
											 				 CAT_IMG_URLS[i],
											 				 i));
			}
		}
	};

	var octopus = {
		init: function() {
			model.init();
			this.cats = model.cats;
			this.currentCat = model.cats[0];
			view.init();
			octopus.addClickOnNames();
		},

		addClickOnNames: function() {
			for (let i = 0; i < this.cats.length; i++) {
				$(`#cat-name-${i}`).bind('click', function() {
					octopus.updateCurrentCat(i);
					view.renderCurrentCat();
				});
			}
		},

		updateCurrentCat: function(index) {
			this.currentCat = this.cats[index];
			octopus.clickOnImg();
		},

		clickOnImg: function() {
			// Unbind any existing click events to eliminate multi-increments
			$('#cat-pic').unbind('click');
			// Bind click event handler
			$('#cat-pic').click(function() {
				octopus.incrementCurrentCatCounter();
				view.renderCurrentCat();
			});
		},

		incrementCurrentCatCounter: function() {
			this.currentCat.clickCount++;
		}
	};

	var view = {
		init: function() {
			view.renderNames();
		},

		renderNames: function() {
			var catNames = $('#names');
			for (var i = 0; i < octopus.cats.length; i++) {
				var cat = octopus.cats[i];

				catNames.append(`<a href="#" class="list-group-item list-group-item-action" data-toggle="list" id="cat-name-${cat.id}">
												${cat.name}
												</a>`);
			}
		},

		renderCurrentCat: function() {
			$('#intro').hide();
			$('#cat-info').show();
			var nameDisplay = $('#cat-name');
			var picDisplay = $('#cat-pic');
			var counterDisplay = $('#cat-counter');

			nameDisplay.text(octopus.currentCat.name);
			picDisplay.attr('src', octopus.currentCat.img_url);
			counterDisplay.text(octopus.currentCat.clickCount);
		}
	};

	octopus.init();
});