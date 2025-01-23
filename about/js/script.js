document.querySelector('.header__inner-burger').addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.header__inner-nav').classList.toggle('open');
})

