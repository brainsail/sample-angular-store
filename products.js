(function() {
	var app = angular.module('store-products',[ ]);

	app.directive('productPanel', function(){
		return {
			restrict: 'E',
			templateUrl: 'includes/product-panel.html'
		};
	});

	app.directive('productTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'includes/tab-panel.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
					};
				},
			controllerAs: "tab"
				
			};
	});

	app.directive('productReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'includes/review-panel.html',
			controller: function () {
				this.review = {};

				this.addReview = function (product){
				this.review.createdOn = Date.now();
				product.reviews.push(this.review);
				this.review = {};
				};
			},
			controllerAs: 'reviewCtrl'
		};

	});

	// app.directive('productGallery', function(){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'includes/gallery-panel.html',
	// 		controller: function (){
	// 			this.current = 0;
	// 			this.setImage = function(newGallery){
	// 			this.current = newGallery || 0;
	// 			};
	// 		},
	// 		controllerAs: 'current'
	// 	};
	// });

	// app.directive('reviewPreview', function(){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'includes/review-live-preview.html'
	// 		controllerAs: 'preview'
	// 	};

})();	