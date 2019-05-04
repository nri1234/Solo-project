var menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', function toggleMenu(event){
    var sideBar = document.getElementById('sidebar');
    sideBar.classList.toggle('short-menu');
});
