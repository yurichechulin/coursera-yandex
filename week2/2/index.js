/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashTags) {
    for (var i=0; i< hashTags.length; i++) {
        hashTags[i] = hashTags[i].toLowerCase();   
    }
    
    for (var i=0; i<hashTags.length; i++) {
        var currentWord = hashTags[i];
        var repeatedIndexes = [];
        for (var j=i+1; j<hashTags.length; j++) {
            if (hashTags[i]==hashTags[j]){
                repeatedIndexes.push(j);
            }
        }
        for (var j=repeatedIndexes.length-1; j>=0; j--) {
            hashTags.splice(repeatedIndexes[j], 1);
        }
    }
    
    var resultString = hashTags.join(', ');

    return resultString;
};
