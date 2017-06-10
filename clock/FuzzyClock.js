/**
 * Created by scott on 6/10/17.
 */

var fuzzyMap = require('./mapping.json');
var moment = require('moment');

var fuzzyClock = {
    getTime: function (timezone) {
        if(timezone) {
            // convert if applicable
        }
        var hour = new moment().hour() + 1;
        // return string;
        return 'about ' + fuzzyMap.hours[hour%12];
    }
}

module.exports = fuzzyClock;