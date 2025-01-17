$(document).ready(function() {
    $(".mobile-menu h2").on("click", function() {
        $(this).next("ul").slideToggle();
    });
});
