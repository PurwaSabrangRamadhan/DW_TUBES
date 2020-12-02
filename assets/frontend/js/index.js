(function($) {
  "use strict"; // Start of use strict

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict


// PLACEHOLDER LOADING
$(window).on('load',function() {
  if ($('#place_load').is(':visible')) {
    $('#place_load').fadeOut("fast", function() {
      $('#main_content').css('visibility','visible').hide().fadeIn();
    });
  }
});

setTimeout(function(){
  if ($('#place_load').is(':visible')) {
    $('#place_load').fadeOut("fast", function() {
      $('#main_content').css('visibility','visible').hide().fadeIn();
    });
  }
}, 3000);