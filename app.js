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
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Various different things about this gem.',
		images: [
		{
			full: 'dodecahedron-01-full.jpg',
			thumb: 'dodecahedron-01-thumb.jpg'
		}
		],
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'BullShitAgon',
		price: 1000.95,
		description: 'Various different things about this gem.',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'MonkeyBallShaped',
		price: 12.95,
		description: 'Various different things about this gem.',
		canPurchase: true,
		soldOut: false
	}
	];
})();