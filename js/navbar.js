function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  const headerBtn = document.querySelector('.header__btn');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
      setTimeout(() => {
        headerBtn.classList.add('burger-active');
      }, 300);
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
      headerBtn.classList.remove('burger-active');
    }
  });
}
burgerMenu();
