(function() {
	var app = angular.module('store',[ ]);	
	
	app.controller('StoreController', function(){
		this.products = shoes;
	
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('GalleryController', function (){
		this.current = 0;
		this.setImage = function(newGallery){
			this.current = newGallery || 0;
		};
	});

	app.controller('ReviewController', function () {
		this.review = {};

		this.addReview = function (product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var shoes =  [
	{
		name: 'Nike Running Shoe',
		price: 2.95,
		description: 'Various different things about this shoe.',
		images: [
			'images/nike-01-full.jpg',
			'images/nike-01-thumb.jpg'
		],
		canPurchase: true,
		soldOut: false,
		reviews: [
			{
			stars: 5,
			body: "Nice Shoe!",
			author: "me@there.com"
			},
			{
			stars: 3,
			body: "Meh.",
			author: "you@there.com"
			},
			{
			stars: 2,
			body: "Wouldn't be caught dead in these!",
			author: "us@there.com"
			}
		]

	},
	{
		name: 'Reebok Ballerina Pump',
		price: 10.95,
		description: 'Various different things about this shoe.',
		images: [
			'images/reebok-01-full.jpg',
			'images/reebok-01-thumb.jpg'
		],
		canPurchase: true,
		soldOut: false,
		reviews: [
			{
			stars: 5,
			body: "Nice Shoe!",
			author: "me@there.com"
			},
			{
			stars: 3,
			body: "Meh.",
			author: "you@there.com"
			},
			{
			stars: 2,
			body: "Wouldn't be caught dead in these!",
			author: "us@there.com"
			}
		]
	},
	{
		name: 'Fila Skele-toes Flip Flop',
		price: 12.95,
		description: 'Various different things about this shoe.',
		images: [
			'images/skele-toes-01-full.jpg',
			'images/skele-toes-01-thumb.jpg'
		],
		canPurchase: true,
		soldOut: false,
		reviews: [
			{
			stars: 5,
			body: "Nice Shoe!",
			author: "me@there.com"
			},
			{
			stars: 3,
			body: "Meh.",
			author: "you@there.com"
			},
			{
			stars: 2,
			body: "Wouldn't be caught dead in these!",
			author: "us@there.com"
			}
		]
	}
	];
})();