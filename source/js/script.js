let headerMain = document.querySelector('.main-header');
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

// На случай неработоспособности скрипта показываем меню в потоке документа
headerMain.classList.remove('main-header--nojs');
if (!headerMain.classList.contains('main-header--nojs')) {
  navMain.classList.add('main-nav--closed');
};

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
