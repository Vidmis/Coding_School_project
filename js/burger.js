$(document).ready(function() {
	$("#burger-container").on('click', function() {
		$(this).toggleClass("open");
		$(".header-menu ul").toggleClass("open");
	});
});

