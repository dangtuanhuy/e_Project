var app = angular.module('myApp', []);
app.controller('MyController', function($scope) {
	$scope.studentinfo =
	 [
		{name: 'Dang Tuan Huy', old: '21', item: 'images/DangTuanHuy.png'},
		{name: 'Lu Minh Thong', old: '18', item: 'images/LuMinhThong.jpg'},
		{name: 'Truong Phu Ngan', old: '18', item: 'images/TruongPhuNgan.jpg'}
	];
});
