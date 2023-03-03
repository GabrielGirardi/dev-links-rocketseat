$(document).ready(function() {	
	let themeButton = $('.theme-button');
	let themeSelector = $('#themeSelector');
	
	$(themeButton).on('click', function() {
		$(this).toggleClass('dark');
		$(themeSelector).attr('href', ($(themeSelector).attr('href') == './css/light-theme.css' ? './css/dark-theme.css' : './css/light-theme.css'));
	});
});