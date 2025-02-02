// TODO: btn 을 click 하면 userid 글자를 가져와서 alert 으로 보여주세요
$(function () {
    $("#quiz").click(function () {
        let userid = $("#userid").text(); 
        alert(userid);  
    });
});