$ (function () {
    new WOW().init();
      $('.counter').countTo();
$(function () {  
  var scrollButton = $('#scroll-top');
  $(window).scroll(function() {
    $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();
  });
  scrollButton.click(function() {
    $('html,body').animate({ 
      scrollTop : 0 
    }, 600);
  });
});
		
})