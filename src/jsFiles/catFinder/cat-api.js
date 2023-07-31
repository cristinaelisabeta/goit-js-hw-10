import {
    breedSelect,
    loader,
    catInfo,
    breedSelectContainer,
  } from '../../catFinderIndex';
  import SlimSelect from 'slim-select';
  import Notiflix from 'notiflix';
  
  export const getCatsBreeds = () => {
    return fetch('https://api.thecatapi.com/v1/breeds')
      .then(resp => resp.json())
      .then(resp => {
        const arrayOfBreeds = getOnlyTheBreeds(resp);
        breedSelect.innerHTML = addToBreedSelect(arrayOfBreeds);
        breedSelect.classList.remove('hide');
        loader.classList.add('hide');
        new SlimSelect({
          select: breedSelect,
        });
      })
      .catch(err => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        loader.classList.add('hide');
        console.log(err);
      });
  };
  
  function getOnlyTheBreeds(array) {
    const arrayOfBreeds = array.map(cat => {
      const name = cat.name;
      const id = cat.id;
      return { id, name };
    });
    return arrayOfBreeds;
  }
  
  function addToBreedSelect(array) {
    const breedSelectOptions = array
      .map(cat => {
        return `<option value="${cat.id}">${cat.name}</option>`;
      })
      .join('');
    return breedSelectOptions;
  }
  
  const makeCatInfo = (image, moreInfo) => {
    return `<img
          src="${image}"
          alt="${moreInfo.name}"
          class="cat-img"
        />
        <div class="description-text">
          <h2 class="breed-name">${moreInfo.name}</h2>
          <p class="cat-description">${moreInfo.description}</p>
          <p class="temperament">
            <span>temperament: </span> ${moreInfo.temperament}
          </p>
        </div>`;
  };
  
  export const fetchCatByBreed = url => {
    return fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        const catSelect = resp[0];
        let { url: image, breeds: moreInfo } = catSelect;
        moreInfo = moreInfo[0];
        loader.classList.add('hide');
        catInfo.innerHTML = makeCatInfo(image, moreInfo);
        breedSelectContainer.classList.remove('hide');
      })
      .catch(err => {
        loader.classList.add('hide');
        breedSelectContainer.classList.remove('hide');
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Please chouse another cat!'
        );
        console.log(err);
      });
  };