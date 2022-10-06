export function fetchCountries(name) {
  {
    const url = `https://restcountries.com/v3/name/${name}?fields=name,capital,languages,population,flags`;
    return fetch(url).then(responce => {
      if (!responce.ok) {
        throw new Error(responce.status);
      }
      return responce.json();
    });
  }
}
