// $(document).ready(function() {	
// 	let themeButton = $('.theme-button');
// 	let theme = $('html');
// 	let darkMode = ('<link href="./scss/dark-theme.css" rel="stylesheet" id="darkMode">');
// 	
// 	$(themeButton).on('click', function() {
// 		$(this).toggleClass('dark');
// 		$(theme).data('data-theme', 'dark');
// 		$(theme).attr('data-theme', ($(theme).attr('data-theme') == 'dark' ? 'light' : 'dark'));
// 		if(theme.attr('data-theme') == 'dark' ){
// 			$('head').append(darkMode)
// 		} else {
// 			$('head link#darkMode').remove();
// 		}
// 	});
// });


$(document).ready(function() {	
	let themeButton = $('.theme-button');
	let themeSelector = $('#themeSelector');
	
	$(themeButton).on('click', function() {
		$(this).toggleClass('dark');
		$(themeSelector).attr('href', ($(themeSelector).attr('href') == './css/light-theme.css' ? './css/dark-theme.css' : './css/light-theme.css'));
	});
});