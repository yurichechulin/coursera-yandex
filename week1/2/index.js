/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    var numHours = Number(hours);
    var numMinutes = Number(minutes);
    //если часы в диапазоне от 0, 23 и минуты в диапазоне 0, 59 то вернуть true иначе false

    return ((numHours>=0)&&
        (numHours<=23)&&
        (numMinutes>=0)&&
        (numMinutes<=59));
};
