/* Burger menu */
var navBtn = document.getElementById('nav-button'); // Burger Button
var navBar = document.getElementById('nav-bar'); // Navigation links

/* Toggle active class when clicking burger menu button */
navBtn.onclick = () => {
    navBar.classList.toggle('nav-active'); // Toggle active navigation
    navBtn.classList.toggle('btn-active'); // Toggle active button
}