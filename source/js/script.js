const navButton = document.querySelector(".nav__button");
const navList = document.querySelector(".nav__list");
const navListItems = document.querySelectorAll(".nav__list-item");
const countryLinks = document.querySelectorAll(".country__link");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const questionsClose = document.querySelector(".questions__close");
const rateFeatureLinks = document.querySelectorAll(".rate__feature-link");
const formSubmits = document.querySelectorAll(".form__submit");
const questionsFeedback = document.querySelector(".questions__feedback");


const openModal = () => {
  popup.classList.add("popup--open");
  popupClose.classList.remove("popup__close--no-js");
};

navButton.addEventListener("click", () => {
  if (navButton.classList.contains("nav__button--opened")) {
    navButton.classList.remove("nav__button--opened");
    navList.classList.remove("nav__list--opened");
  } else {
    navButton.classList.add("nav__button--opened");
    navList.classList.add("nav__list--opened");
  }
});

for (let i=0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", () => {
    navButton.classList.remove("nav__button--opened");
    navList.classList.remove("nav__list--opened");
  });
}

popupClose.addEventListener("click", () => {
  popupClose.classList.add("popup__close--no-js");
  popup.classList.remove("popup--open");
});

questionsClose.addEventListener("click", () => {
  questionsClose.classList.add("popup__close--no-js");
  questionsFeedback.classList.remove("questions__feedback--open");
});

for (let i=0; i < countryLinks.length; i++) {
  countryLinks[i].addEventListener("click", () => {
    openModal();
  });
}

for (let i=0; i < rateFeatureLinks.length; i++) {
  rateFeatureLinks[i].addEventListener("click", () => {
    openModal();
  });
}

for (let i=0; i < formSubmits.length; i++) {
  formSubmits[i].addEventListener("click", (evt) => {
    evt.preventDefault;
  });
}
