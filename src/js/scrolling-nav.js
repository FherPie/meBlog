(function($) {
  "use strict"; // Start of use strict
  console.log("Andres Piedra")
  var $root=$('html, body');
  // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  
  //  // if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $root.animate({
  //         scrollTop: ($( $.attr(this, 'href') ).offset().top - 56)
  //       }, 'fast');
  //       return false;
  //     }
  //   //}
  // });


  $(document).on("click", 'a.nav-link.js-scroll-trigger', function() {
     alert('Comming Soon !');
});


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    // alert("vale");
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict
