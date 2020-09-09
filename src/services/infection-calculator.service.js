module.exports = calculateInfectionProbability;

const GENRE_WEIGHT = 1;
const AGE_WEIGHT = 2;
const HAS_PREVIOUS_DESEASE_WEIGHT = 3;
const FOLLOWING_OMS_RULES = 15;


function calculateInfectionProbability(personInformationParams) {

    let deseaseProbability = _mountCalculationOperators(personInformationParams);

    if (personInformationParams.isFollowingOMSRule == 'true') {
        deseaseProbability = deseaseProbability - FOLLOWING_OMS_RULES;
    }

    return deseaseProbability;

}

function _mountCalculationOperators(personInformationParams) {

    const ageProbability = _getAgeProbabilityBasedOnAgeRange(personInformationParams.age);

    const previousDeseaseProbability = _getDeseaseProbabilityBasedOnPreviousDesease(personInformationParams.hasPreviousDesease);

    const genreProbability = _getDeseaseProbabilityBasedOnGenre(personInformationParams.genre);

    const average = _calculateAverage(ageProbability, previousDeseaseProbability, genreProbability);

    return average;

}

function _calculateAverage(ageProbability, previousDeseaseProbability, genreProbability) {
    return _getDividendOperator(ageProbability, previousDeseaseProbability, genreProbability) / _getDivisorOperator();
}

function _getDividendOperator(ageProbability, previousDeseaseProbability, genreProbability) {

    return (ageProbability * AGE_WEIGHT) + (previousDeseaseProbability * HAS_PREVIOUS_DESEASE_WEIGHT)
        + (genreProbability * GENRE_WEIGHT)
}

function _getDivisorOperator() {
    return GENRE_WEIGHT + HAS_PREVIOUS_DESEASE_WEIGHT + AGE_WEIGHT;
}


function _getAgeProbabilityBasedOnAgeRange(age) {

    if (age >= 60) return 60;

    if (age >= 40) return 40;

    if (age >= 20) return 20;

    if (age < 20) return 10;

}

function _getDeseaseProbabilityBasedOnPreviousDesease(hasPreviousdesease) {
    return hasPreviousdesease == 'true' ? 70 : 30
}

function _getDeseaseProbabilityBasedOnGenre(genre) {
    if (genre === 'masc') return 58;
    if (genre === 'fem') return 42;
}