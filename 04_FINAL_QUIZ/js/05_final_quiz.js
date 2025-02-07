// TODO: quiz 을 click 하면 heading3 선택자에 모든 디자인을 없애고, 
// TODO: desing2 를 적용하세요 
$(function () {
    $("#quiz").click(function() {
        $("#heading3").removeClass().addClass("desing2");
    });
});