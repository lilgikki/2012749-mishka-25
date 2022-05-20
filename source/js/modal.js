const buttonBuy = document.querySelector('.weekly-item__buy');
const modal = document.querySelector('.modal');

modal.classList.remove('modal--nojs');

buttonBuy.addEventListener('click', function () {
    modal.classList.remove('modal--noactive');
    modal.classList.add('modal--active');
});

modal.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.modal__container')) {  
    modal.classList.remove('modal--active');
    modal.classList.add('modal--noactive');
  }
});
