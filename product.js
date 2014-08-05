(function() {
	var app = angular.module('product',[ ]);

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'includes/product-title.html'
		};
	});

	app.directive('productGallery', function(){
		return {
			restrict: "E",
			templateUrl: "includes/product-gallery.html",
			controller: function (){
				this.current = 0;
				this.setImage = function(newGallery){
				this.current = newGallery || 0;
				}
			},
			controllerAs: 'gallery'
		};
	});

})();