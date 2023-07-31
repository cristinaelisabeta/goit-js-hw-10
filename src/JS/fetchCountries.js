const baseUrl = 'https://restcountries.com/v2/name/';
const parameters = '?fields=flags,name,capital,population,languages';

export function fetchCountries(name) {
  return fetch(`${baseUrl}${name}${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}