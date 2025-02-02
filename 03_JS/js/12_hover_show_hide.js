// TODO: sub-menu 에 마우스가 올라가면 drop-down 메뉴를 보여주고
// TODO: 마우스가 내려가면 숨기세요 
$(function () {
    $("#sub-menu").hover(function () {
        $("#drop-down").show();
    }, function () {
        $("#drop-down").hide();
    });
});