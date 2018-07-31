(function () {

// navigation
  let burger = document.querySelector('.burger');
  let header = document.querySelector('header');
  let mobilePart = document.querySelector('.mobile__part');

  burger.addEventListener('click', function () {
    if (header.classList.contains('header-active')) {
      header.classList.remove('header-active');
      header.querySelector('.header__logo').classList.remove('header__logo-active');
      mobilePart.classList.remove('mobile__part-active');
      this.classList.remove('burger-active');

      document.body.classList.remove('body-locked');
    } else {
      header.classList.add('header-active');
      header.querySelector('.header__logo').classList.add('header__logo-active');
      mobilePart.classList.add('mobile__part-active');
      this.classList.add('burger-active');

      document.body.classList.add('body-locked');
    }
  });
// navigation

})();