// imports
import { getCatsBreeds, fetchCatByBreed } from './jsFiles/catFinder/cat-api.js';
import { getElement } from './jsFiles/getElement.js';

// variabiles

export const breedSelect = getElement('.breed-select');
export const loader = getElement('.loader-container');
export const catInfo = getElement('.cat-info');
export const breedSelectContainer = getElement('.breed-select-container');

const showBreedInfo = e => {
  const catId = e.target.value;
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}&api_key=live_RQvqdVFGUQrrE9Vw4rf4Md9jYpDzu6uix9ygAKWHpkQ05AmYjWaqQ2TVL1UpvVxj`;
  breedSelectContainer.classList.add('hide');
  loader.classList.remove('hide');
  catInfo.innerHTML = '';
  fetchCatByBreed(url);
};

window.addEventListener('DOMContentLoaded', getCatsBreeds);
breedSelect.addEventListener('change', showBreedInfo);