const changeTheme = () => {
  let showOrHide = true;
  const sun = $('.header__switch__theme_container__icon__sun');
  const moon = $('.header__switch__theme_container__icon__moon');
  $('.header__switch__theme__container').click(function () {
    if (showOrHide) {
      sun.removeClass('d-none');
      sun.addClass('d-block');
      moon.removeClass('d-block');
      moon.addClass('d-none');
      $('html').attr('data-theme', 'dark');
    } else {
      sun.addClass('d-none');
      sun.removeClass('d-block');
      moon.removeClass('d-none');
      moon.addClass('d-block');
      $('html').attr('data-theme', 'light');
    }
    showOrHide = !showOrHide;
  });
};
const openOverlayMenu = () => {
  $('.header__burger').click(function () {
    console.log(2);
    $('.header__overlay--scale').addClass('open');
  });
};
const closeOverlayMenu = () => {
  $('.header__overlay__button--close').click(function () {
    console.log(2);
    $('.header__overlay--scale').removeClass('open');
  });
};
const toggleClass = function () {
  $(window).scroll(function () {
    $('.buttonMoveTop').toggleClass('active ', this.scrollY > 0);
  });
};
$(document).ready(function () {
  $('.stat__count__number').countUp();
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
  });
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',
  });
  $('#owl-agency').owlCarousel({
    loop: true,
    nav: false,
    margin: 50,
    responsiveClass: true,
    responsive: { 0: { items: 1, nav: false }, 736: { items: 1, nav: false } },
  });
  toggleClass();
  changeTheme();
  openOverlayMenu();
  closeOverlayMenu();
});
