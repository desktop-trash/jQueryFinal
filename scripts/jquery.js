//spoiler image blur
$(".image-overlay").on( "click", function() {
    $(this).animate({ opacity: "0" }, 200, "linear", function(){
        $(this).remove();
    });
});
$(".image-overlay").on("hover", function() {
    $(this).animate({filter: "invert(1)"});
    $(this).css("cursor", "pointer");
});

//title fade
$(document).ready(function() {
    $("#titlecard").fadeIn("slow");
});

//animated nav buttons
$(".chapter").on("hover", function() {
    $(this).animate({width: "100%"}, 200, swing);
    $(this).css("cursor", "pointer");
});

//expanding text
$(".collapse-overlay").on( "click", function() {
    $(this).css("filter", "invert(1)")
    $(this).animate({ width: "0" }, 666, "swing", function(){
        $(this).remove();
    });
});
//animated scroll
/*
$('.chapter').on("click", function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var offset = $(target).offset().top;
    console.log(target);
    $('body').animate(
        {scrollTop: offset},
        1000,
        "swing"
    );
});
*/

//toggle light/darkmode
$("#lightmode-toggle").on("click", function() {
    $("body").toggleClass("lightmode");
});
