let developer1 = {
  firstName: "Maria",
  lastName: "Y.",
  country: "Cyprus",
  continent: "Europe",
  age: 30,
  language: "Javascript",
  getLocation() {
    console.log("Country: " + this.country + ", Continent: " + this.continent);
  },
};

let developer2 = {
  firstName: "Victoria",
  lastName: "T.",
  country: "Puerto Rico",
  continent: "Americas",
  age: 23,
  language: "Python",
  getLocation() {
    console.log("Country: " + this.country + ", Continent: " + this.continent);
  },
};

developer1.getLocation();
developer2.getLocation();
