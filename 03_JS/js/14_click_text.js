// TODO: btn 을 click 하면 username 글자를 가져와서 alert 으로 보여주세요
$(function () {
    $("#btn").click(function () {
        let username = $("#username").text(); 
        alert(username);  
    });
});