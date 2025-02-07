// TODO: #btn 에 마우스가 위로 올라가면 고양이로 내려오면 강아지로 바꾸세요  
$(function () {
    $("#animal").hover(function () {
        $("#animal").attr("src", "../img/15_click_attr_cat.jpg");
    }, function () {
        $("#animal").attr("src", "../img/15_click_attr_dog.jpg");
    });
});