const COUNTRIES = require('../../db');
const formatDate = require('./format-date.service');

function getCountriesBySortedConfirmedCases() {
    const sortedCountries = COUNTRIES.map((country) => {
        country.updatedAt = formatDate(country.updatedAt);
        return country;
    })
        .sort((prevCountry, curCountry) => {
            return prevCountry.confirmedCases < curCountry.confirmedCases ? 1 : -1;
        });

    return sortedCountries;
}


module.exports = getCountriesBySortedConfirmedCases;
