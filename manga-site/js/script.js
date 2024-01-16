let katalog = document.querySelector('#katalog');
let menuKatalog = document.querySelector('#menu-katalog');

katalog.addEventListener('click', function() {
    menuKatalog.style.display = menuKatalog.style.display === 'none' ? 'block' : 'none';
});
