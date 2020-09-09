const COUNTRIES = require('../../db');
const getCountriesBySortedConfirmedCases = require('../../src/services/countries.service');

test('Get All Countries', () => {
    expect(COUNTRIES).not.toBeNull();
})

test('Get countries sorted by number of cases', () => {
    const countryList = getCountriesBySortedConfirmedCases();
    expect(countryList[0].country).toBe('USA');
    expect(countryList[4].country).toBe('Peru');

})
