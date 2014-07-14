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
		soldOut: false
		
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
		soldOut: false
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
		soldOut: false
	}
	];
})();