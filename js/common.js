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
    $('.scroll-pane').jScrollPane();

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

    $(".filter_inner li div").click(function(){
        if ($(this).children("span").hasClass("filter__more-act")) {
            $(this).parent().children("ul").slideUp();
            $(this).children().removeClass("filter__more-act");
        }
        else {
            $(this).parent().children("ul").slideDown();
            $(this).children("span").addClass("filter__more-act");
        }
    });

    $(".filter_inner ul li").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(".filter_inner ul li").removeClass("active");
            $(this).addClass("active");
        }
    });

    $(".filter_street li").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(".filter_street li").removeClass("active");
            $(this).addClass("active");
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

// ---------------- show/hide comments  -------------------------- //
    $(".js-commets").click(function(){
        if ($(this).children().hasClass("js-active")) {
            $(this).next().slideUp();
            $(this).children().removeClass("js-active");
        }
        else {
            $(this).children().addClass("js-active");
            $(this).next().slideDown();
        }
    });

});