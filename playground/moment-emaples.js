var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current Timestamp :' + now.unix());


var timestamp = 1504584431;

var currentMoment = moment.unix(timestamp);

console.log('current moment : ', currentMoment.format());
