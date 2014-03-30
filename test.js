
var fs = require('fs');
var path = require('path');
var PassingIcon = require('./index').PassingIcon;
var FailedIcon = require('./index').FailedIcon;

var icon1 = new PassingIcon();
icon1.pipe(fs.createWriteStream(path.join(__dirname, './sample/passing.png')));

var icon2 = new FailedIcon();
icon2.pipe(fs.createWriteStream(path.join(__dirname, './sample/failed.png')));