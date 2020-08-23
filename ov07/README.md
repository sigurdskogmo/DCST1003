# Øving: Hendelser
I denne øvingen skal dere lage et lite enkelt spill. Spillet går ut på å finne og klikke på flest mulig skjulte knapper i løpet av 15 sekunder.

Ta utgangspunkt i denne kildekoden:
```html
<html>
<body>
  <h1>Find the hidden button and click it!</h1>
  <p><b>How many buttons can you click in 15 seconds?</b></p>
  <div>Points: </div><div id="pointsText"></div>
  <button id="theButton">The button</button>
</body>
<script>
let points = 0;
let pointsText = document.getElementById('pointsText');
pointsText.innerText = points;

let theButton = document.getElementById('theButton');
theButton.style.position = 'absolute';
// Hide theButton
theButton.style.visibility = 'hidden';
// Move theButton to a random position
theButton.style.left = Math.random() * 500 + 'px';
theButton.style.top = Math.random() * 500 + 'px';

// Show theButton when the mouse cursor is close to it
window.onmousemove = (event) => {
  let rect = theButton.getBoundingClientRect();
  let centerX = (rect.right + rect.left) / 2;
  let centerY = (rect.bottom + rect.top) / 2;

  // Calculate distance between mouse cursor and center of theButton
  let distance = Math.sqrt(Math.pow(centerX - event.clientX, 2) + Math.pow(centerY - event.clientY, 2));

  if(distance < 100 && theButton.style.visibility == 'hidden') {
    theButton.style.visibility = 'visible';
  }
}
</script>
</html>
```
Legg til følgende funksjonalitet:

* Når en spiller klikker på knappen skal spilleren få et poeng og knappen skal skjules og flyttes til en tilfeldig plass i vinduet.
* Etter 15 sekunder, bruk for eksempel alert() til å fortelle poengsummen. Poengsummen skal deretter nullstilles, og spillet skal starte på nytt.
* Frivillig:
    * Vis også nedtelling i sekunder slik at spilleren ser hvor mange sekunder som er igjen.
