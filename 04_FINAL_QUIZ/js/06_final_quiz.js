// TODO: #phone 에 마우스가 올라가면 이미지를 06_smart_phone_2.jpg 로 바꾸세요.
// TODO: 마우스가 밖으로 나가면 이미지를 다시 06_smart_phone_1.jpg 로 바꾸세요
$(function(){
    $("#phone").hover(function () {
        // TODO: 마우스 위
        $("#phone").attr("src", "../img/06_smart_phone_2.jpg");
    }, function () {
        // TODO: 마우스 밖
        $("#phone").attr("src", "../img/06_smart_phone_1.jpg");
    })
});