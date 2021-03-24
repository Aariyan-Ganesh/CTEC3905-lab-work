menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
});

for (const element of document.querySelectorAll ('nav a')){
  element.addEventListener('click',ev => {
    menuToggler.classList.remove('open');
  });
}
