// initial numbers
var minValue = 0;
var maxValue = 10;
document.getElementById('minValue').innerHTML = minValue;
document.getElementById('maxValue').innerHTML = maxValue;
document.getElementById('lowestNumber').value = minValue;
document.getElementById('highestNumber').value = maxValue;


var gameNumber = randomNumberBetween(minValue, maxValue);


function randomNumberBetween (min, max) {
	//var result = Math.floor(Math.random() * max) + min;
	var result = Math.floor(Math.random() * (max - min + 1)) + min;
	return result;
}

console.log(gameNumber);

function rangeChange() {
	var lowestNumber = document.getElementById('lowestNumber').value;
	var highestNumber = document.getElementById('highestNumber').value;
	document.getElementById('minValue').innerHTML = lowestNumber;
	document.getElementById('maxValue').innerHTML = highestNumber;
	gameNumber = randomNumberBetween(lowestNumber, highestNumber);
	console.log('new number: ', gameNumber);
}

function compare (htmlNumber) {
	var guessedNumber = document.getElementById('guess box').value;	
	if (gameNumber === guessedNumber){
		console.log('you won');
		document.getElementById('result').innerHTML = 'You won!';
	}

	if (gameNumber < guessedNumber) {
		console.log('the number is lower');
		document.getElementById('result').innerHTML = 'Nope, the number is lower';
	}

	if (gameNumber > guessedNumber) {
		console.log('the number is higher');
		document.getElementById('result').innerHTML = 'Nope, the number is higher';
	}
}