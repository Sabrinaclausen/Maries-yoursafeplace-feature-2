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