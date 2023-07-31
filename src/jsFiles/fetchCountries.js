import Notiflix from 'notiflix';
import dataHandler from './dataHandle.js';
import { clearDisplay } from './displayCountry.js';

export function fetchCountries(name) {
  return fetch(name)
    .then(res => {
      if (!res.ok) {
        // throw new Error(res.status);
        Notiflix.Notify.failure('Oops, there is no country with that name');
        clearDisplay();
      }
      return res.json();
    })
    .then(data => {
      dataHandler(data);
    })
    .catch(err => {
      console.log(err);
    });
}