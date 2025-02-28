document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".hamburger-menu");
    const button = document.querySelector(".hamburger-btn");
  

    function toggleMenu() {
      const isOpen = menu.classList.toggle("show-menu");
      button.setAttribute("aria-expanded", isOpen);
    }

    button.addEventListener("click", function () {
      toggleMenu();
    });
  

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show-menu");
        button.setAttribute("aria-expanded", "false");
      }
    });
  

    document.addEventListener("keyup", function (event) {
      if (event.key === "Escape" && menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        button.setAttribute("aria-expanded", "false");
        button.focus();
      }
    });
  });
