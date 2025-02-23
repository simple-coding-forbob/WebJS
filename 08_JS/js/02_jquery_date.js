// 02_jquery_date.js
$( function() {
    $( "#datepicker" ).datepicker({
        showOn:"button",
        buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
        dateFormat: "yy-mm-dd",
        dayNamesMin : ['월','화','수','목','금','토','일'],
        changeMonth:true,
        changeYear:true,
        monthNamesShort:  [ "1월", "2월", "3월", "4월", "5월", "6월","7월", "8월", "9월", "10월", "11월", "12월" ],
    });
} );