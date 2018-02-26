var brand = document.querySelector('.mybrand');
charming(brand);

brand.addEventListener('mouseenter', function() {
	var brandHover = anime({
		targets: '.mybrand span',
		translateY: [-4,0],
		translateX: [4,0],
		color: ['#f3f3f3','#4285f4'],
		delay: function(el, i) {return i*50},
		easing: 'easeInOutSine',
		duration: 100,
		rotate: [25,0]
	});
});
brand.addEventListener('mouseleave', function(){
	var brandLeave = anime({
		targets: '.mybrand span',
		translateY: [-4,0],
		translateX: [4,0],
		color: '#9d9d9d',
		delay: function(el, i) {return 20*i},
		easing: 'easeInOutSine',
		duration: 200,
		rotate: [180,0],
	});
});