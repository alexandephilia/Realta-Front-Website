document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");

  sidebar.addEventListener("click", function (event) {
    const header = event.target.closest(".product-header");
    if (header) {
      const submenu = header.nextElementSibling;
      const icon = header.querySelector(".arrow-icon");

      // Toggle the submenu
      if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
        icon.classList.remove("fa-chevron-right");
        icon.classList.add("fa-chevron-down");
      } else {
        submenu.style.display = "none";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-right");
      }

      // Prevent the click from bubbling up to parent elements
      event.stopPropagation();
    }
  });

  // Initially hide all submenus
  const submenus = sidebar.querySelectorAll(".collapse");
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const offcanvasElement = document.querySelector(".offcanvas");

  offcanvasElement.addEventListener("show.bs.offcanvas", function () {
    document.body.classList.add("offcanvas-open");
  });

  offcanvasElement.addEventListener("hide.bs.offcanvas", function () {
    document.body.classList.remove("offcanvas-open");
  });
});
