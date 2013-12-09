$(function() {
    $("#Brothers tr:even").addClass("stripe1");
    $("#Brothers tr:odd").addClass("stripe2");

    $("#Brothers tr").hover(
        function() {
            $(this).toggleClass("highlight");
        },
        function() {
            $(this).toggleClass("highlight");
        }
    );
});