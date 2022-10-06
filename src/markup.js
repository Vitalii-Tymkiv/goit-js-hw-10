function baseMarkup({ flags, name }) {
  return /*html*/ `<li class="country-list__item">
    <img
      class="country-list__flag"
      width="30px"
      height="20px"
      src="${flags[0]}"
    ></img>
    <p class="country-list__name">${name.official}</p>
  </li>`;
}

function countryMarkup({ flags, name, capital, population, languages }) {
  const languageStr = Object.values(languages).join(' ');

  return /*html*/ `<div class="country-list__item">
    <img
      class="country-list__flag"
      width="60px"
      height="40px"
      src="${flags[0]}"
    ></img>
    <p class="country-list__name accent">${name.official}</p>
  </div>
  <div class = 'description'>
          <p class ="description__name">Capital: <span>${capital}</span></p>
          <p class ="description__name">Population: <span>${population}</span></p>
          <p class ="description__name">Languages: <span>${languageStr}</span></p>
      </div>`;
}

export { baseMarkup, countryMarkup };
