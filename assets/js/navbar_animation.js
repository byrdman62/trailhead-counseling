$(document).ready(function () {
    // Hamburger icon animations
    $('.navbar-hamburger').on('click', function () {
      $('.animated-icon').addClass('open');
    });
    $('#navbarResponsive').on('hide.bs.collapse', function () {
      $('.animated-icon').toggleClass('open');
    });
    //Mobile navbar animations
    $('#navbarResponsive').on('show.bs.collapse', function () {
      $(this).parent().parent().addClass('navbar-opaque');
    });
    $('#navbarResponsive').on('hidden.bs.collapse', function () {
      $(this).parent().parent().removeClass('navbar-opaque');
    });
  });
