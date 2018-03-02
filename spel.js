/* element för manipulation */
var button = document.getElementById("clickerbutton");
var lizardButton = document.getElementById("lizard");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var zebraButton = document.getElementById("zebra");
var birdButton = document.getElementById("bird");
var lizardCounter = document.getElementById("lizardCounter");
var zebraCounter = document.getElementById("zebraCounter");
var birdCounter = document.getElementById("birdCounter");

var odla;
var zebran;
var fageln;

/* Skapa ett nytt element för poängen */
var scoreText = document.createElement("p");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lizardCost = 150;
var zebraCost = 30;
var zebra = null;
var birdCost = 100;
var lizardCount = 0;
var zebraCount = 0;
var birdCount = 0;
var odlai = 0;
var zebrai = 0;
var fageli = 0;

/* startvärden */
scoreText.textContent = "Points: 0";
lizardCounter.textContent = "Ödlor: 0";
zebraCounter.textContent = "Zebror: 0";
birdCounter.textContent = "Fåglar: 0";
lizardButton.textContent = "Ödla: " + lizardCost;
zebraButton.textContent = "Zebra: " + zebraCost;
birdButton.textContent = "Fågel: " + birdCost;

/* click event + logic */
button.addEventListener("click", function() {
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
}, true);

// knapp och kod för lizard powerup
lizardButton.addEventListener("click", function() {
	if (bank >= lizardCost) {
		clickValue += 1;
		bank -= lizardCost;
		lizardCost += 200;
		lizardButton.textContent = "Ödlor: " + lizardCost;
		powerText.textContent = "Köpte Ödla";
		lizardCount += 1;
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till 
		lizardCounter.textContent = "Ödla: " + lizardCount;
		
		odla = document.createElement("div");
		odla.className = "odlan";
		document.getElementsByTagName("body")[0].appendChild(odla);
		odlai++;

		if ((odlai % 2) == 1) {
			odla.style.transform = "scaleX(-1)"
		}
		odla.style.top = Math.random()*1000 + "px";
		odla.style.left = Math.random()*1300 + "px";
		odla.style.right = Math.random()*1300 + "px";
		odla.style.bottom = Math.random()*1000 + "px";
	} else {
		powerText.textContent = "Du har inte råd med Ödla";
	}
}, true);

/* kod för zebrapowerup med räknare */
zebraButton.addEventListener("click", function() {
	if (bank >= zebraCost) {
		bank -= zebraCost;
		powerText.textContent = "Köpte zebra";
		zebraCount += 1;
		zebraCost = Math.floor(zebraCost * 1.25);
		zebraCounter.textContent = "Zebror: " + zebraCount;
		zebraButton.textContent = "Zebra : " + zebraCost;
		
		zebran = document.createElement("div");
		zebran.className = "zebran";
		document.getElementsByTagName("body")[0].appendChild(zebran);

		zebrai++;
		if ((zebrai % 2) == 1) {
			zebran.style.transform = "scaleX(-1)"
		}
		zebran.style.top = Math.random()*1000 + "px";
		zebran.style.left = Math.random()*1300 + "px";
		zebran.style.right = Math.random()*1300 + "px";
		zebran.style.bottom = Math.random()*1000 + "px";
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
		birdCost = Math.floor(birdCost * 1.5);
		birdButton.textContent = "Fåglar: " + birdCost;

		fageln = document.createElement("div");
		fageln.className = "fageln";
		document.getElementsByTagName("body")[0].appendChild(fageln);

		fageli++;
		if ((fageli % 2) == 1) {
			fageln.style.transform = "scaleX(-1)"
		}
		fageln.style.top = Math.random()*1000 + "px";
		fageln.style.left = Math.random()*1300 + "px";
		fageln.style.right = Math.random()*1300 + "px";
		fageln.style.bottom = Math.random()*1000 + "px";
		// Lägg till setInterval med en funktion som laddas varje sekund
		bird = setInterval(function() {
			bank += 5;
			scoreText.textContent = "Points: " + bank;
		}, 1000);
	}
}, true);

scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.