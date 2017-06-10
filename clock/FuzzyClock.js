/**
 * Created by scott on 6/10/17.
 */

var fuzzyMap = require('./mapping.json');
var moment = require('moment');

function round5(x) {
    return (Math.ceil(x/5)*5)%30;
}

function aboutPastHalf(minutes) {
    return (minutes >= 26);
}

var fuzzyClock = {
    getTime: function (timezone) {
        if(timezone) {
            // convert if applicable
        }
        var min = new moment().minute();
        var hour = new moment().hour();
        var string = 'O clock';
        if(aboutPastHalf(min) && min <= 55) {
            string = 'thirty';
        }
        if(min >= 55) {
            hour = hour + 1;
        }
        string = (round5(min) ? fuzzyMap.minutes[round5(min)] + ' past ' : 'About ') + fuzzyMap.hours[hour] + ' ' + string;
        return string;
    }
}

module.exports = fuzzyClock;