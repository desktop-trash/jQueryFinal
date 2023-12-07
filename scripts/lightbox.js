//image lightbox
var lightbox_active = true;

$("img").on( "click", function() {
    $("#lightbox").addClass("active");
    $("#lightbox").animate({ opacity: "1" }, 200, "linear");
    var src = $(this).attr('src');
    const new_img = document.createElement('img');
    new_img.src = src;
    new_img.id = "lightbox-img";
    $("#lightbox").append(new_img);
    $("lightbox-img").fadeOut(0);
    $("lightbox-img").fadeIn(200);
});
$("#lightbox").on( "click", function() {
    $("#lightbox").removeClass("active");
    $("#lightbox").empty('img');
    $("#lightbox").animate({ opacity: "0" }, 0, "swing");
});
$("img").hover(function() {
    return
})
$(".img").mouseleave(function() {
    return
});