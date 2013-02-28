$(document).ready(function() {

// ---------------- show/hide lang  -------------------------- //
    $(".js-lang").click(function(){
        if ($(this).hasClass("lang_active")) {
            $(this).children().children("ul").fadeOut();
            $(this).removeClass("lang_active");
        }
        else {
            $(this).addClass("lang_active");
            $(".drop-list").fadeOut();
            $(".js-nav").removeClass("js-active");
            $(this).children().children("ul").fadeIn();
        }
    });

// ---------------- show/hide nav  -------------------------- //
    $(".js-nav").click(function(){
        if ($(this).hasClass("js-active")) {
            $(this).children().children("ul").fadeOut();
            $(this).removeClass("js-active");
        }
        else {
            $(this).addClass("js-active");
            $(".drop-list").fadeOut();
            $(".js-lang").removeClass("lang_active");
            $(this).children().children("ul").fadeIn();
        }
    });


// ---------------- extend list -------------------------- //
    $(".catalog li ul").each(function(){
        $(this).parent().addClass("extend");
    });
    $(".extend").click(function(){
        if ($(this).hasClass("extend_active")) {
            $(this).children("ul").slideUp();
            $(this).removeClass("extend_active");
        }
        else {
            $(this).addClass("extend_active");
            $(this).children("ul").slideDown();
        }
    });
// ---------------- Input drop-list -------------------------- //
    // show/hide
    $(".js-input").focusin(function(){
        $(this).next().next().fadeIn("fast");
    });
    $(".js-input").focusout(function(){
        $(this).next().next().fadeOut("fast");
    });
    // get text
    $(".drop-list li").click(function(){
        var text = $(this).children("span").text();
        $(this).parent().prev().prev().val(text);
    });


// ---------------- Map size/resize  -------------------------- //
    function mapResize() {
        var map_height = $(window).height();
        $(".js-map iframe").height(map_height);
    }
    mapResize();
    $(window).resize(function(){
        mapResize();
    });






// ---------------- sidebar(index) size/resize -------------------------- //

});