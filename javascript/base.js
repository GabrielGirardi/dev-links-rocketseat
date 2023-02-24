$(document).ready(function() {	
	let themeButton = $('.theme-button');
	let theme = $('html')
	let darkMode = ('<link href="./scss/dark-theme.css" rel="stylesheet">')
	
	$(themeButton).on('click', function() {
		$(this).toggleClass('dark');
		$(theme).data('data-theme', 'dark');
		$(theme).attr('data-theme', ($(theme).attr('data-theme') == 'dark' ? 'light' : 'dark'));
		if(theme.attr('data-theme') == 'dark' ){
			$('head').append(darkMode)
		} else {
			$('head > link:nth-child(10)').remove();
		}
	});
});