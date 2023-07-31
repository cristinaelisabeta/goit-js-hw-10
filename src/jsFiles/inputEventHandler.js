import { searchInput } from '../index.js';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';
import { clearDisplay } from './displayCountry.js';

let searchName = '';

const inputEventHandler = () => {
  searchName = searchInput.value;
  searchName = searchName.trim();
  if (searchName === '') {
    clearDisplay();
    return Notiflix.Notify.info('please type a country name');
  } else {
    const url = `https://restcountries.com/v3.1/name/${searchName}?fields=name,capital,population,flags,languages`;
    fetchCountries(url);
  }
};

export default inputEventHandler;