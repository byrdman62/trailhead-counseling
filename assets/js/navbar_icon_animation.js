$(document).ready(function () {
    $('.navbar-hamburger').on('click', function () {
      $('.animated-icon').addClass('open');
    });
    $('#navbarResponsive').on('hide.bs.collapse', function () {
      $('.animated-icon').toggleClass('open');
    });
  });
