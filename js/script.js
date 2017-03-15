// initial numbers
var minValue = 0;
var maxValue = 10;
document.getElementById('minValue').innerHTML = minValue;
document.getElementById('maxValue').innerHTML = maxValue;
document.getElementById('lowestNumber').value = minValue;
document.getElementById('highestNumber').value = maxValue;


var gameNumber = randomNumberBetween(minValue, maxValue);


function randomNumberBetween (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function rangeChange() {
	var lowestNumber = parseInt(document.getElementById('lowestNumber').value);
	var highestNumber = parseInt(document.getElementById('highestNumber').value);
	document.getElementById('minValue').innerHTML = lowestNumber;
	document.getElementById('maxValue').innerHTML = highestNumber;
	gameNumber = randomNumberBetween(lowestNumber, highestNumber);
}

function compare () {
	var guessedNumber = parseInt(document.getElementById('guessbox').value);
	if (gameNumber === guessedNumber){
		document.getElementById('result').innerHTML = 'You got it right!';
		var restart = document.createElement("button");
		restart.setAttribute('onclick', 'restartGame');
    	restart.innerText = "Restart game";
		document.getElementById('gameWon').appendChild(restart);
	}

	if (gameNumber < guessedNumber) {
		document.getElementById('result').innerHTML = 'Nope, the number is lower';
	}

	if (gameNumber > guessedNumber) {
		document.getElementById('result').innerHTML = 'Nope, the number is higher';
	}
}

function restartGame(){
  location.reload();
}