const navList = document.querySelector('.nav__list');
const navButton = document.querySelector('.nav__button');
const navListItems = document.querySelectorAll('.nav__list-item');
const countryLinks = document.querySelectorAll('.country__link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const questionsClose = document.querySelector('.questions__close');
const rateFeatureLinks = document.querySelectorAll('.rate__feature-link');
const formPopup = document.querySelector('.popup__form');
const formQuestions = document.querySelector('.questions__form')
const questionsFeedback = document.querySelector('.questions__feedback');
const countries = document.querySelectorAll('.country');

const openModal = () => {
  popup.classList.add('popup--open');
  popupClose.classList.remove('popup__close--no-js');
};

const closeModal = () => {
  popupClose.classList.add('popup__close--no-js');
  popup.classList.remove('popup--open');
  questionsClose.classList.add('popup__close--no-js');
  questionsFeedback.classList.remove('questions__feedback--open');
}

const escKey = (evt) => {
  if ((evt.key === 'Escape' ||
    evt.key === 'Esc')) {
    return true;
  }
};

const onEscKeydown = (evt) => {
  if(escKey(evt)) {
    closeModal();
  }
};

document.addEventListener('keydown', onEscKeydown);

if (popup.classList.contains('popup--open') ||
    questionsFeedback.classList.contains('questions__feedback--open')) {
      window.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains('popup') &&
            !evt.target.classList.contains('questions__feedback')) {
             closeModal();
           }
      });
}

navList.classList.remove('nav__list--no-js');
navButton.classList.remove('nav__button--no-js');
popup.classList.remove('popup--no-js');
for (let i = 1; i < countries.length; i++) {
  countries[i].classList.add('visually-hidden');
}

navButton.addEventListener('click', () => {
  if (navButton.classList.contains('nav__button--opened')) {
    navButton.classList.remove('nav__button--opened');
    navList.classList.remove('nav__list--opened');
  } else {
    navButton.classList.add('nav__button--opened');
    navList.classList.add('nav__list--opened');
  }
});

for (let i=0; i < navListItems.length; i++) {
  navListItems[i].addEventListener('click', () => {
    navButton.classList.remove('nav__button--opened');
    navList.classList.remove('nav__list--opened');
  });
}

popupClose.addEventListener('click', () => {
  closeModal();
});

questionsClose.addEventListener('click', () => {
  closeModal();
});

for (let i=0; i < countryLinks.length; i++) {
  countryLinks[i].addEventListener('click', () => {
    openModal();
  });
}

for (let i=0; i < rateFeatureLinks.length; i++) {
  rateFeatureLinks[i].addEventListener('click', () => {
    openModal();
  });
}

const inputPhoneValidity = (form) => {
  const inputPhone = form.querySelector('.form__input--phone');
  inputPhone.addEventListener('input', (evt) => {
    evt.preventDefault();
    inputPhone.setCustomValidity('');

    const regPhone = '^((8|\+7)?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$';
    const phoneText = inputPhone.value;

    if (!phoneText) {
      inputPhone.setCustomValidity('Укажите номер телефона');
      inputPhone.classList.add('form__input--invalid');
    } else {
      inputPhone.classList.remove('form__input--invalid');
    }

    if(regPhone.test(phoneText) == false) {
      inputPhone.setCustomValidity('Укажите корректный номер телефона');
      inputPhone.classList.add('form__input--invalid');
    } else {
      inputPhone.classList.remove('form__input--invalid');
    }
  });

  inputPhone.reportValidity();
};

formPopup.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(evt.target);
  inputPhoneValidity(formPopup);
});

formQuestions.addEventListener('submit', (evt) => {
  evt.preventDefault();
  inputPhoneValidity(evt.target);
});

