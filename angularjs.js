var app = angular.module('myApp', []);
app.controller('MyController', function($scope) {
	$scope.studentinfo = [
		{name: 'Dang Tuan Huy', old: '21', item: 'images/DangTuanHuy.png', mssv: 'A17007'},
		{name: 'Lu Minh Thong', old: '18', item: 'images/LuMinhThong.jpg',mssv: 'A17006'},
		{name: 'Truong Phu Ngan', old: '18', item: 'images/TruongPhuNgan.jpg',mssv: 'A17005'}
	];
});
