// TODO: sub 에 마우스가 올라가면 drop 메뉴를 보여주고
// TODO: 마우스가 내려가면 숨기세요 
$(function () {
    $("#sub").hover(function () {
        $("#drop").show();
    }, function () {
        $("#drop").hide();
    });
});