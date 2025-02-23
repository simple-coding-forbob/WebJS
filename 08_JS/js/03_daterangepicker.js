// 03_daterangepicker.js
$('#daterange').daterangepicker({
    timePicker: true,
    timePicker24Hour: true,
    locale: {
        format: 'YYYY-MM-DD HH:MM',
        monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월","7월", "8월", "9월", "10월", "11월", "12월" ],
        daysOfWeek: ['월','화','수','목','금','토','일'],
        cancelLabel: "취소",
        applyLabel: "확인"
    }
});