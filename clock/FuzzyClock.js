/**
 * Created by scott on 6/10/17.
 */

var fuzzyMap = require('./mapping.json');
var fuzzyClock = {
    getTime: function (hour, minute, timezone) {
        if(timezone) {
            // convert
        }
        console.log(hour);
        return fuzzyMap['01'];
    }
}

module.exports = fuzzyClock;