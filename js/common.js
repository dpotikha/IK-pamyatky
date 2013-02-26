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

// ---------------- Filter -------------------------- //
    $(".sidebar__title").children().addClass("active");
    $(".sidebar__title").click(function(){
        if ($(this).children().hasClass("active")) {
            $(this).next().slideUp();
            $(this).children().removeClass("active");
        }
        else {
            $(this).children().addClass("active");
            $(this).next().slideDown();
        }
    });

    $(".filter__more").click(function(){
        if ($(this).hasClass("filter__more-act")) {
            $(this).parent().children("ul").slideUp();
            $(this).removeClass("filter__more-act");
        }
        else {
            $(this).parent().children("ul").slideDown();
            $(this).addClass("filter__more-act");
        }
    });

    $(".check-all").change(function(){
        var check = $(this).parent().parent().children("ul").children("li").children("label").children("input");
        if ($(this).hasClass("js-active")) {
            $(this).removeClass("js-active");
            $(this).removeAttr("checked");
            check.removeAttr("checked");
            check.removeClass("js-checked");
        }
        else {
            $(this).addClass("js-active");
            $(this).attr("checked", "checked");
            check.attr("checked", "checked");
            check.addClass("js-checked");
        }
    });

    $(".filter li ul").each(function(){
        $(this).parent().addClass("filter__extend-check");
    });



});