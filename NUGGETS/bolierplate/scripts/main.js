//! Navbar change color on scroll

window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav');
	window.scrollY >= 60 ? nav.classList.add('active') : nav.classList.remove('active');

	/* if(window.scrollY >= 60) {
        document.querySelector('nav').classList.add('active');
    } else {
        document.querySelector('nav').classList.remove('active');
    } */
});

//! set Theme Dark and Light
const toggleBtn = document.querySelector('#changeThemeBtn');
const htmlEl = document.querySelector('html');
/* devemos considerar numa variável o elemento que estamos a querer usar do DOM
const iconBtn = document.querySelector('#changeThemeBtn i'); */

toggleBtn.addEventListener('click', () => {
	/* alternar de "sun" para "moon" */

	/* querySelector pode associar a mais elementos para além do document*/
	toggleBtn.querySelector('i').classList.toggle('fa-sun');
	toggleBtn.querySelector('i').classList.toggle('fa-moon');

	htmlEl.classList.toggle('dark-theme');

	// armazenar a escolha do utilizador */
	if (htmlEl.classList.contains('dark-theme')) localStorage.setItem('theme', 'dark');
	else localStorage.setItem('theme', 'light');
});


//!  use localStorage


// verificar se o utilizador já escolheu o tema
/* if (localStorage.getItem("theme") === "dark") {
    htmlEl.classList.add('dark-theme');
    toggleBtn.querySelector('i').classList.add('fa-moon');

} else {
		toggleBtn.querySelector('i').classList.add('fa-sun');
} */

if (localStorage.getItem("theme") === "dark") {
    htmlEl.classList.add('dark-theme');
    toggleBtn.querySelector('i').classList.add('fa-moon');
} else (localStorage.getItem("theme") === "light"){
toggleBtn.querySelector('i').classList.add('fa-sun');
};
    
//! Scroll to top */
const scrollTop = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {

    /* Ternary: 
    window.scrollY > 2900 ? (scrollTop.style.display = 'block') : (scrollTop.style.display = 'none'); */

    /*
     other writting of ternary:
     scrollTop.style.display = window.scrollY > 2900? 'block'  : 'none';
    scrollTop.style.display = window.scrollY > 2900? '1'  : '0';
    */


    
    if (window.scrollY > 2900) {
        scrollTop.style.display = 'block';
        scrollTop.style.opacity = '1';
    } else {
        scrollTop.style.display = 'none';
        scrollTop.style.opacity = '0';
    }
})

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

})

//! Menu Mobile
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__menu');
const links = document.querySelectorAll('.navbar__menu li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    })
})

/*
 *https://jonsuh.com/hamburgers/
 *https://codepen.io/designcouch/pen/ExvwPY
 *https://freefrontend.com/css-hamburger-menu-icons/
 */
