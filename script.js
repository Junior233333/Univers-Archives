window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


function toggleMenu()
{
    const menuToggle = document.querySelector('.menuToggle');
    const menu = document.querySelector('.menu');

    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');

}