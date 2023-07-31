import { countryList, countryInfo } from '../index';

export const displayCountry = data => {
  const displayItems = data
    .map(country => {
      const { flags, name } = country;
      return `<p class="country"><span><img src="${flags.svg}" alt="${name.official}" /></span>${name.official}</p>`;
    })
    .join('');
  countryList.innerHTML = displayItems;
  countryInfo.innerHTML = '';
};

export const clearDisplay = () => {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
};

export const displayCountryWithInfo = data => {
  const matchCountry = data[0];
  const { capital, languages, population } = matchCountry;
  const displayCapital = capital.join(',');
  let displayLanguages = [];
  for (let key in languages) {
    displayLanguages.push(languages[key]);
  }
  displayLanguages = displayLanguages.join(', ');
  const displayCountryInfo = `<p class="country-info-text"><span>capital:</span>${displayCapital}</p>
      <p class="country-info-text"><span>population:</span>${population}</p>
      <p class="country-info-text"><span>languages:</span>${displayLanguages}</p>`;
  countryInfo.innerHTML = displayCountryInfo;
};
