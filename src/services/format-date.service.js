const dateRegex = require('../utils/date-template-regex');
module.exports = (date) => {
    if (date.match(dateRegex)) return date;

    const dateFormmated = date.split('-').reverse().join('/');

    return dateFormmated;
}



/**
 * Código mantido apenas para fins de discussão.
 * @param {} date 
 */

function _oldDateParser(date) {
    const dateArray = date.split('-');

    const dateFormmated = dateArray[2] + '/' +
        dateArray[1] + '/' +
        dateArray[0];
    return dateFormmated
}


