/* element för manipulation */
var button = document.getElementById("clickerbutton");
var lionButton = document.getElementById("lion");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var zebraButton = document.getElementById("zebra");
var birdButton = document.getElementById("bird");
var lionCounter = document.getElementById("lionCounter");
var zebraCounter = document.getElementById("zebraCounter");
var birdCounter = document.getElementById("birdCounter");

/* Skapa ett nytt element för poängen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lionCost = 150;
var zebraCost = 30;
var zebra = null;
var birdCost = 100;
var lionCount = 0;
var zebraCount = 0;
var birdCount = 0;

/* startvärden */
scoreText.textContent = "Points: 0";
lionCounter.textContent = "Lejon: 0";
zebraCounter.textContent = "Zebror: 0";
birdCounter.textContent = "Fåglar: 0";
lionButton.textContent = "Lejon: " + lionCost;
zebraButton.textContent = "Zebra: " + zebraCost;
birdButton.textContent = "Fågel: " + birdCost;

/* click event + logic */
button.addEventListener("click", function() {
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
}, true);

// knapp och kod för lion powerup
lionButton.addEventListener("click", function() {
	if (bank >= lionCost) {
		clickValue += 1;
		bank -= lionCost;
		lionCost += 200;
		lionButton.textContent = "Lejon: " + lionCost;
		powerText.textContent = "Köpte lion";
		lionCount += 1;
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till 
		lionCounter.textContent = "Lejon: " + lionCount;
	} else {
		powerText.textContent = "Du har inte råd med lion";
	}
}, true);

/* kod för zebrapowerup med räknare */
zebraButton.addEventListener("click", function() {
	if (bank >= zebraCost) {
		bank -= zebraCost;
		powerText.textContent = "Köpte zebra";
		zebraCount += 1;
		zebraCounter.textContent = "Zebror: " + zebraCount;
		// Lägg till setInterval med en funktion som laddas varje sekund
		zebra = setInterval(function() {
			bank += 2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);
	}
}, true);

//Kod för fågel powerup
birdButton.addEventListener("click",function(){
	if (bank >= birdCost) {
		bank -= birdCost;
		powerText.textContent = "Köpte Fågel";
		birdCount += 1;
		birdCounter.textContent = "Fåglar: " + birdCount;
		// Lägg till setInterval med en funktion som laddas varje sekund
		bird = setInterval(function() {
			bank += 5;
			scoreText.textContent = "Points: " + bank;
		}, 1000);
	}
}, true);

scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.