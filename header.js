document.getElementById("burgericon").addEventListener("click", function () {
  const menu = document.getElementById("mobilnav");
  menu.classList.toggle("active");
});

document.getElementById("closeicon").addEventListener("click", function () {
  const menu = document.getElementById("mobilnav");
  menu.classList.remove("active");
});

const toggles = document.querySelectorAll('.toggle-submenu');
toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault(); 
        const parent = toggle.parentElement;
        parent.classList.toggle('open');
      });
});

document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 600) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});