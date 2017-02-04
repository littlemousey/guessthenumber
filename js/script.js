var minValue = 0;
var maxValue = 10;
document.getElementById('minValue').innerHTML = minValue;
document.getElementById('maxValue').innerHTML = maxValue;
//var body = document.getElementByTagName('body');

var gameNumber = randomNumberBetween(minValue, maxValue);


function randomNumberBetween (min, max) {
	var result = Math.floor(Math.random() * max) + min;
	return result;
}

console.log(gameNumber);

function compare (htmlNumber) {
	var guessedNumber = document.getElementById('guess box').value;	
	if (gameNumber === guessedNumber){
		console.log('you won');
	}

	if (gameNumber < guessedNumber) {
		console.log('the number is lower');
	}

	if (gameNumber > guessedNumber) {
		console.log('the number is higher');
	}
}