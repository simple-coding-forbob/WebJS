// TODO: sub-menu 에 마우스가 올라가면 drop-down 메뉴를 천천히 아래로 보여주고
// TODO: 마우스가 내려가면 천천히 위로 숨기세요 
$(function () {
    $("#sub-menu").hover(function () {
        $("#drop-down").slideDown();
    }, function () {
        $("#drop-down").slideUp();
    });
});