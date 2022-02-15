const navButton = document.querySelector(".nav__button");
const navList = document.querySelector(".nav__list");
const navListItems = document.querySelectorAll(".nav__list-item");

navButton.addEventListener("click", () => {
  if (navButton.classList.contains("nav__button--open")) {
    navButton.classList.remove("nav__button--open");
    navList.classList.remove("nav__list--open");
  } else {
    navButton.classList.add("nav__button--open");
    navList.classList.add("nav__list--open");
  }
});

for (let i=0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", () => {
    navButton.classList.remove("nav__button--open");
    navList.classList.remove("nav__list--open");
  });
}
