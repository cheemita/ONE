$(function () {
    $(".portal-menu").on("click", function () {
        var ref = $(this).attr("data-menu");
        $('html, body').scrollTo(ref, 325, { offset: { top: -150 }});
    });
});