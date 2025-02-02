// TODO: section 안에 h1 자식태그만 선택해서 
// TODO: background-color 을 blue 로 color 는 white 로 바꾸세요
$(function(){
    $("section").children("h1").css("background-color", "skyblue")
                                .css("color", "white");
});