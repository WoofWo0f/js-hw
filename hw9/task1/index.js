const countriesCapitals = new Map();
countriesCapitals.set("Russia", "Moscow");
countriesCapitals.set("France", "Paris");
countriesCapitals.set("USA", "Washington");
countriesCapitals.set("Germany", "Berlin");

const getCapital = function (countryName) {
  return countriesCapitals.get(countryName);
};

const addCountry = function (countryName, capital) {
  countriesCapitals.set(countryName, capital);
};

const removeCountry = function (countryName) {
  countriesCapitals.delete(countryName);
};

console.log(countriesCapitals);

console.log(getCapital("USA"));

addCountry("Belarus", "Minsk");
console.log(getCapital("Belarus"));

removeCountry("Russia");
console.log(countriesCapitals);
