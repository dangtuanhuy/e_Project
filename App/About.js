var theApp = angular.module('myApp',[]);
theApp.controller('MyController', function($scope){
	$scope.titlee = "Who We Are";
	$scope.img1 = "images/Catalog/Cars/Innova/7.png";
	$scope.title1h5 = "AUTOWORLD";
	$scope.content1 = 'AutoWorld is a company that deals with all types of cars and motors. They started off with a company in collaboration with "GOOD YEAR” and then build up their own establishment. They have different showrooms for different brands at various locations in the city and because of their services they have attracted a vast number of Customers in very short duration of time.';
	$scope.title2 = "Our History";
	$scope.listyear = [
		{year: '2010', yearevent: 'The company was founded and developed. The company started to distribute from this car. Car provider for companies is the car maker honda'},
		{year: '2012', yearevent: 'The company continues to grow with more than stock. The company began selling car Suzuki. The company opened a new branch to develop'},
		{year: '2014', yearevent: 'The company suffered heavy losses due to the competition from other companies. The company tries to grow instead of closed companies'},
		{year: '2016', yearevent: 'Due to the high flexibility, the company regained initial capital. The company continues to ignore from the car maker in other motos as SYM, China'},
		{year: '2018', yearevent: 'The company thrived. The company started selling the car type. Company to open new branches a lot more.'},
	];
	$scope.title3 = "Our Service";
	$scope.content2 = "The company with service and maintenance mode the car quite well. Incentives of many customers. With the customer will have a discount for the purchase";
	$scope.sub = [
		{text: 'Maintenance deadlines'},
		{text: 'Giving gifts on birthdays'},
		{text: 'Gift gasoline and lubricant'},
		{text: 'Good check'},
		{text: 'Interesting promotions'},
		{text: '20% reduction for the next car purchase'},
		{text: '15% discount when shopping online'},
		{text: '5% discount when buying car insurance'},
	];

});