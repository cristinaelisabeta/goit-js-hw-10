import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './JS/fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(element) {
  const inputSearch = element.target.value.trim();
  // console.log(inputSearch); виводить у консоль те що вводить користувач
  // наступний код знімає з пошуку країни коли користувач видаляє введені символи
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
  if (inputSearch === '') {
    return;
  }

  fetchCountries(inputSearch)
    .then(createMakpUp)
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}

function createList(array) {
  return array
    .map(item => {
      return `<li class="item"><img src="${item.flags.svg}" alt="${item.name}" width="60"> <p>${item.name}</pc></li>`;
    })
    .join('');
}

function createCountyCard(array) {
  return `<h2 class="title">
            <img class="img" src="${array[0].flags.svg}" alt="${
    array[0].name
  }" width="60">${array[0].name}
          </h2>
          <p class="capital"> <span class="capital-description">Capital: </span>${
            array[0].capital
          }</p>
          <p class="population"> <span class="population-description">Population: </span>${
            array[0].population
          }</p>
            <p class="language"> <span class="language-description">Languages: </span>${array[0].languages
              .map(item => item.name)
              .join(' ,')}</p>`;
}

function createMakpUp(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (data.length >= 2 && data.length <= 10) {
    countryInfo.innerHTML = '';
    countryList.innerHTML = createList(data);
  } else {
    countryList.innerHTML = '';
    countryInfo.innerHTML = createCountyCard(data);
  }
}

//the end