import $ from "jquery";

export let loader = (funcCallBack) => {
	$(".loader").css({
		"z-index" : "1000",
		opacity   : "1"
	});
	$("header").css("opacity", "0");
	$("body").css("overflow", "hidden");
	$(".shell").css({
		transition  : "clip-path .5s ease",
		"clip-path" : "circle(0% at 50% 50%)"
	});

	setTimeout(() => {
		funcCallBack();
	}, 500);

	setTimeout(() => {
		$(".loader").css({
			"z-index" : "-1",
			opacity   : "0"
		});
		$(".shell").css("clip-path", "circle(1000% at 50% 50%)");
		$("header").css("opacity", "1");
		$("body").css("overflow", "auto");
	}, 1500);
};
