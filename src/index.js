import './css/styles.css';
// import { fetchCountries } from './jsFiles/fetchCountries.js';
import { getElement } from './jsFiles/getElement.js';
import _ from 'lodash';
import inputEventHandler from './jsFiles/inputEventHandler.js';

const DEBOUNCE_DELAY = 300;
export const searchInput = getElement('#search-box');
export const countryList = getElement('.country-list');
export const countryInfo = getElement('.country-info');

// name.official - numele complet al țării
// capital - capitala
// population - populația
// flags.svg - un link către o imagine a steagului
// languages - o matrice cu limbile vorbite

searchInput.addEventListener(
  'input',
  _.debounce(inputEventHandler, DEBOUNCE_DELAY)
);

// fetchCountries(url);