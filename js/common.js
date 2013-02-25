$(document).ready(function() {

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

});