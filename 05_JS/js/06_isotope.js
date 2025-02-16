$(function () {
  // isotope 설정하기: 1) product-box 를 isotope 대상으로 지정
    $('.product-box').isotope({
      // options
      itemSelector: '.product',
      layoutMode: 'fitRows',
      // filter: ".women"
    });

    // (*, .men, women) 3개 중에 1개의 li 를 클릭할 때
    $(".product-list > li").click(function () {
      $('.product-box').isotope({
        // this : 클릭한 li 를 의미함
        filter: $(this).attr("data-filter")
      });
    });
})