import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import { fetchCountries } from './fetchCountries';
import { baseMarkup, countryMarkup } from './markup';

const DEBOUNCE_DELAY = 300;
const notifyOptions = {
  position: 'center-top',
  clickToClose: true,
};

const handleInput = event => {
  event.preventDefault();

  const query = event.target.value.trim().toLowerCase();

  fetchCountries(query)
    .then(countries => {
      handleCountriesResponce(countries);
    })
    .catch(() => {
      resetCountryMarkup();
      Notify.failure('Oops, there is no country with that name', notifyOptions);
    });
};

function handleCountriesResponce(items) {
  resetCountryMarkup();
  if (items) {
    if (items.length > 10) {
      Notify.info(
        'Too many matches found. Please enter a more specific name.',
        notifyOptions
      );
    } else if (items.length > 2) {
      items.forEach(item => {
        const markup = baseMarkup(item);
        refs.list.insertAdjacentHTML('beforeend', markup);
      });
    } else if (items.length === 1) {
      const markup = countryMarkup(items[0]);
      refs.div.insertAdjacentHTML('beforeend', markup);
    }
  }
}

function resetCountryMarkup() {
  refs.div.innerHTML = '';
  refs.list.innerHTML = '';
}

const debouncedHandleInput = debounce(handleInput, DEBOUNCE_DELAY);
refs.input.addEventListener('input', debouncedHandleInput);
