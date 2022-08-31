let navIcon = document.querySelector(".nav-toggle");
let menu = document.querySelector(".translate");

const openMenu = () => {
  let visibility = menu.getAttribute("data-visible");
  if (visibility === "false") {
    menu.setAttribute("data-visible", true);
  } else {
    menu.setAttribute("data-visible", false);
  }
};

navIcon.addEventListener("click", openMenu);
