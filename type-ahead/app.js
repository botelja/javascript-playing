const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matches = findMatches(this.value, cities);
  const output = matches
    .map((match) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = match.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = match.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li><span>${cityName} - ${stateName}</span> <span class="population">${
        match.population
      }</span></li>`;
    })
    .join('');
  return (suggestion.innerHTML = output);
}

//city or state to find
const searchInput = document.querySelector('.search');
//insert city or state
const suggestion = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
