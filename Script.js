function navbar() {
  const openMenu = document.querySelector(".menu-icon");
  const closeMenu = document.querySelector(".close-icon");
  const sideNav = document.querySelector(".side-nav");

  openMenu.addEventListener("click", () => {
    sideNav.style.display = "flex";
    sideNav.style.right = "0%";
  });

  closeMenu.addEventListener("click", () => {
    sideNav.style.display = "none";
    sideNav.style.right = "-50%";
  });
}

navbar();
