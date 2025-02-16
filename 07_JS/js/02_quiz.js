// Typed js 적용
let typing = new Typed('#typing', {
  strings: ["Amazing!","Enjoy!", "simple-coding Shop"],
  typeSpeed: 50,
});

// TODO : menu 숨기기/보이기
$(function () {
  $(".fab").click(function () {
      $(".menu").toggle();
  })
})