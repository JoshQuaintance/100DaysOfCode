import $ from 'jquery';

export let loader = funcCallBack => {
    $(".loader").css("opacity", "1");
    $("header").css("opacity", "0");
    $("body").css("overflow", "hidden")
    $(".shell").css({
        "transition": "clip-path .5s ease",
        "clip-path": "circle(0px at 50% 50%)"
    })

    setTimeout(() => {
      funcCallBack();
    }, 500);

    setTimeout(() => {
      $(".loader").css("opacity", "0");
      $(".shell").css("clip-path", "circle(1000px at 50% 50%)");
      $("header").css("opacity", "1");
      $("body").css("overflow", "auto")
    }, 1500);
  };
  