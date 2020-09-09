const getCountriesBySortedConfirmedCases = require('../services/countries.service');


module.exports = (req, res) => {
    const countries = getCountriesBySortedConfirmedCases();
    return res.status(200).json(countries);
}
