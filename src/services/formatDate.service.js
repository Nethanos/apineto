const dateRegex = require('../utils/date-template-regex');
module.exports = (date) => {
    console.time('date')
    if (date.match(dateRegex)) return date;

    const dateArray = date.split('-');

    const dateFormmated = dateArray[2] + '/'
    dateArray[1] + '/'
    dateArray[0];

    console.timeEnd('date');
    return dateFormmated;
}
