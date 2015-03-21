/*
learnyounode (http://nodeschool.io)
LEARN YOU THE NODE.JS FOR MUCH WIN!
PLEASE DO NOT DELETE THIS FILE
*/



// Previous solutions

/*

* HELLO WORLD (My Solution)

console.log("HELLO WORLD");

*/

/*

* BABY STEPS (My Solution)

var number = 0;
for (i = 2; i < process.argv.length; i++) {
	number += Number(process.argv[i]);
}
console.log(number);

*/

/*

* MY FIRST I/O! (My Solution)

var fs = require('fs');
var myFileAsBuffer = fs.readFileSync(process.argv[2]);
var myFileAsString = myFileAsBuffer.toString();
var myFileAsStringSplitIntoArray = myFileAsString.split('\n');
var numberOfNewlinesInMyFile = myFileAsStringSplitIntoArray.length - 1;
console.log(numberOfNewlinesInMyFile);

*/

/*

* MY FIRST ASYNC I/O! (My Solution)

var fs = require('fs');
var numberOfNewLines = undefined;

function countNewLines (callback) {
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
		numberOfNewLines = fileContents.toString().split('\n').length - 1;
		callback();
	})
};

function logToConsole () {
	console.log(numberOfNewLines);
};

countNewLines(logToConsole);

*/

/*

* FILTERED LS (My Solution)

var fs = require('fs');
var path = require('path');

function printListOfFiles () {
	fs.readdir(process.argv[2], function addToList (err, list) {
		for (i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === '.' + process.argv[3]) {
				console.log(list[i]);
			}
		}
	})
}

printListOfFiles();

*/



// Code to be tested

