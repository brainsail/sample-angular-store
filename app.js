(function() {
	var app = angular.module('store',[ ]);	
	
	app.controller('StoreController', function(){
		this.products = gems;
	
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

	var gems =  [
	{
		name: 'Nike Running Shoe',
		price: 2.95,
		description: 'Various different things about this shoe.',
		images: [
		{
			full: 'images/nike-01-full.jpg',
			thumb: 'images/nike-01-thumb.jpg'
		}
		],
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Reebok Ballerina Pump',
		price: 10.95,
		description: 'Various different things about this shoe.',
		images: [
		{
			full: 'images/reebok-01-full.jpg',
			thumb: 'images/reebok-01-thumb.jpg'
		}
		],
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Fila Skele-toes Flip Flop',
		price: 12.95,
		description: 'Various different things about this shoe.',
		images: [
		{
			full: 'images/skele-toes-01-full.jpg',
			thumb: 'images/skele-toes-01-thumb.jpg'
		}
		],
		canPurchase: true,
		soldOut: false
	}
	];
})();