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

// Slider
const container = document.querySelector('.slider-compare-cat');
const image_1 = container.querySelector('.cat-item-1');
const image_2 = container.querySelector('.cat-item-2');
const button = container.querySelector('[data-button-slider]');

const {x: containerX, width: containerWidth} = container.getBoundingClientRect();

const handleDown = (e) => {
  window.addEventListener('mousemove', handleDrag);
  window.addEventListener('mouseup', handleMouseUp);
}

const handleDrag = (e) => {
  const buttonPos = e.clientX - containerX;

  if (buttonPos < 0 || buttonPos > containerWidth) {
    return;
  }

  const percent = buttonPos / containerWidth * 100;
  console.log(e.clientX);

  window.requestAnimationFrame(() => {
    button.style.left = buttonPos + 'px';
    image_1.style = `clip-path: polygon(0% 0%, ${percent}% 0%, ${percent}% 100%, 0% 100%);`
    image_2.style = `clip-path: polygon(${percent}% 0%, 100% 0%, 100% 100%, ${percent}% 100%);`
  })
}
const handleMouseUp = () => {
  window.removeEventListener('mousemove', handleDrag);
  window.removeEventListener('mouseup', handleMouseUp);
}

if (button) {
  button.addEventListener('mousedown', handleDown);
}
