$(function () {
    $("#animal").hover(function () {
        $("#animal").attr("src", "../img/15_click_attr_cat.jpg");
    }, function () {
        $("#animal").attr("src", "../img/15_click_attr_dog.jpg");
    });
});