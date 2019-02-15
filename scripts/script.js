
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('#navbar');
        brand = $('.navbar-brand');

    if (scrollPos > navbar.height()) {
      navbar.addClass('nav-colored');
      navbar.removeClass('nav-transparent');

    } else {
      navbar.addClass('nav-transparent');
      navbar.removeClass('nav-colored');
    }
  });
});
