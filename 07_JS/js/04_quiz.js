// Typed js 적용
let typing = new Typed('#typing', {
    strings: ["Amazing!", "Enjoy!", "simple-coding Shop"],
    typeSpeed: 50,
});

// menu 숨기기/보이기
$(function () {
    $(".fab").click(function () {
        $(".menu").toggle();
    })
})
// swiper 이미지 회전
let swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
});
// TODO : AOS 
AOS.init();