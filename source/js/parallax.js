const	layerOne = document.querySelector('.promo-product__image');
const desktopWidth = 1440;

layerOne.addEventListener('mousemove', function(e) {
  if (window.innerWidth >= desktopWidth) {
    layerOne.style.willChange = 'transform'; // оптимизация
    const pageX = e.clientX - window.innerWidth/2,
          pageY = e.clientY - window.innerHeight/2;
    layerOne.style.transform = 'translateX(' + (1 + pageX/200) + '%) translateY(' + (1 + pageY/200) + '%)';
  }
});

layerOne.addEventListener('mouseout', function(e) {
    layerOne.style.removeProperty('transform');
    layerOne.style.willChange = 'auto';
});
