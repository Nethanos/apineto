const calculateInfectionProbability = require('./../services/infection-calculator.service');

module.exports = (req, res) => {
    const params = req.query;

    const probability = calculateInfectionProbability(params);
    return res.status(200).json(probability.toFixed(2));

}