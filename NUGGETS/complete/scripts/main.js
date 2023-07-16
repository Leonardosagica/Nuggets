/* Navbar change color on scroll */
window.addEventListener('scroll', event => {
	if (window.scrollY >= 60) {
		document.querySelector('nav').classList.add('active');
	} else {
		document.querySelector('nav').classList.remove('active');
	}
});

/* Menu Mobile */
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.navbar__menu');
const links = document.querySelectorAll('.navbar__menu li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

links.forEach(link =>
	link.addEventListener('click', () => {
		hamburger.classList.remove('active');
		mobileMenu.classList.remove('active');
	}),
);

/* set Theme Dark and Light */
const toggleBtn = document.querySelector('#changeThemeBtn');
const htmlEl = document.querySelector('html');

toggleBtn.addEventListener('click', () => {
	// Alternar entre as classes 'fa-moon' e 'fa-sun'
	toggleBtn.querySelector('i').classList.toggle('fa-sun');
	toggleBtn.querySelector('i').classList.toggle('fa-moon');

	htmlEl.classList.toggle('dark-theme');

	// Armazene a escolha do utilizador no localStorage
	if (htmlEl.classList.contains('dark-theme')) localStorage.setItem('theme', 'dark');
	else localStorage.setItem('theme', 'light');
});

// Verifique se o utilizador já escolheu um tema antes
if (localStorage.getItem('theme') === 'dark') {
	htmlEl.classList.add('dark-theme');
}

/*
 *https://jonsuh.com/hamburgers/
 *https://codepen.io/designcouch/pen/ExvwPY
 *https://freefrontend.com/css-hamburger-menu-icons/
 */

/* Scroll to top */

const goTopBtn = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {
	console.log(window.scrollY);

	goTopBtn.style.display = window.scrollY > 2500 ? 'block' : 'none';
	goTopBtn.style.opacity = window.scrollY > 2500 ? '1' : '0';

	/* if (window.scrollY > 2500) {
		goTopBtn.style.display = 'block';
		goTopBtn.style.opacity = '1';
	} else {
		goTopBtn.style.display = 'none';
		goTopBtn.style.opacity = '0';
	} */
});

goTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
