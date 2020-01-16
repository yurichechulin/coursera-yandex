/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    
    var time = ((hours*60)+ minutes + interval) % 1440;
    var newHours = Math.floor(time/60);
    var newMinutes = time % 60;

    if (newHours<10) { newHours = '0'+newHours;  }
    if (newMinutes<10) { newMinutes = '0'+newMinutes;}

    return newHours+':'+newMinutes;

};
