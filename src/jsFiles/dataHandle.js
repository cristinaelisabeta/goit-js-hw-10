import Notiflix from 'notiflix';
import {
  displayCountry,
  clearDisplay,
  displayCountryWithInfo,
} from './displayCountry.js';

const dataHandler = data => {
  const dataLength = data.length;
  if (dataLength > 10) {
    Notiflix.Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
    clearDisplay();
  }
  if (dataLength <= 10 && dataLength > 1) {
    displayCountry(data);
  }
  if (dataLength === 1) {
    displayCountry(data);
    displayCountryWithInfo(data);
  }
};

export default dataHandler;