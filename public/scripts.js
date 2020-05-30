$(document).on("scroll", () => {
	if ($(document).scrollTop() > 15) {
		$("header").addClass("headerScrolled");
	} else {
		$("header").removeClass("headerScrolled");
	}
});

$(document).ready(() => {
	$("body").css("clip-path", "circle(1000% at 50% 50%)");
});
