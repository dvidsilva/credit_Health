var greeting = 'Hi ';
var name = 'Ashley';

var welcomeMessage = greeting + name + '!';

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

$(window).on('scroll', function () {
	
	var distanceScrolled = $(window).scrollTop();
	console.log('The distance scrolled is: ' + distanceScrolled);

	if (distanceScrolled >800) {
		$('.auto').addClass('faded-in');
	} else {
		$('.auto').removeClass('faded-in');
	}