/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var tweetArray = tweet.split(' ');
    var hashtagsArray = [];
    for (var i=0; i<tweetArray.length; i++) {
        if (tweetArray[i].indexOf("#")==0) {
            hashtagsArray.push(tweetArray[i].substring(1));
        }
    }
    return hashtagsArray;
};

