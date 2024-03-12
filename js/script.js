//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika package menu di klik
document.querySelector("#package").onclick = () => {
  navbarNav.classList.toggle("active");
};
