/* element för manipulation */
var button = document.getElementById("clickerbutton");
var lionButton = document.getElementById("lejon");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var zebraButton = document.getElementById("zebra");
var birdButton = document.getElementById¨("fågel");

/* Skapa ett nytt element för poängen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lejonCost = 150;
var zebraCost = 30;
var zebra = null;
var birdCost = 500;

/* startvärden */
scoreText.textContent = "Points: 0";
lionButton.textContent = "Lejon: " + lejonCost;
zebraButton.textContent = "Zebra: " + zebraCost;
birdButton.textContent = "Fågel: " + birdCost;

/* click event + logic */
button.addEventListener("click", function() {
	// kontrollera om vi har ett lejon aktivt, annars återställ clickValue
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
}, true);

/* kod för zebrapowerup med räknare */
zebraButton.addEventListener("click", function() {
	if (bank >= zebraCost) {
		bank -= zebraCost;
		powerText.textContent = "Köpte zebra";

		// Lägg till setInterval med en funktion som laddas varje sekund
		zebra = setInterval(function() {
			bank += 2;
			scoreText.textContent = "Points: " + bank;
		}, 1000);
	}
}, true);

// knapp och kod för lejon powerup
lionButton.addEventListener("click", function() {
	if (bank >= lejonCost) {
		clickValue += 1;
		bank -= lejonCost;
		lejonCost *= 2;
		lionButton.textContent = "Lejon: " + lejonCost;
		powerText.textContent = "Köpte lejon";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
	} else {
		powerText.textContent = "Du har inte råd med lejon";
	}
}, true);

//Kod för fågel powerup
birdButton.addEventListener("click",function(){
	if (bank >= birdCost) {
		bank -= birdCost;
		powerText.textContent = "Köpte Fågel";

		// Lägg till setInterval med en funktion som laddas varje sekund
		bird = setInterval(function() {
			bank += 5;
			scoreText.textContent = "Points: " + bank;
		}, 1000);
	}
}, true);

scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.