# Øving: Konteinere
Dere skal lage et lite tegneprogram. Senere skal dere lære om HTML canvas, men vi kan også lage et enkelt tegneprogram ved hjelp av div-elementer. Ta utgangspunkt i følgende filer:

index.html:

```html
<html>
  <head>
    <meta charset="UTF-8"/>
  </head>
  <body>
    <div>
      Color: <select id="colorSelection">
        <option>Red</option>
        <option>White</option>
        <option>Black</option>
      </select>
    </div>
    <div id="drawingBoard" style="width: 600px; border-style: solid; border-width: 1; display: table;"></div>
  </body>
  <script src="index.js"></script>
</html>
```

index.js:
```js
// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');
let drawingBoard = document.getElementById('drawingBoard');

// Associate color names to RGB values
let colors = {
  Red: 'rgb(255, 0, 0)',
  White: 'rgb(255, 255, 255)',
  Black: 'rgb(0, 0, 0)'
};

// The drawingBoard squares will be stored in this table:
let divs = [];

// Create the drawingBoard squares:
for (let i = 0; i < 600; i++) {
  let div = document.createElement('div');

  div.style.height = '20px';
  div.style.width = '20px';
  div.style.float = 'left';
  div.style.backgroundColor = colors['White'];

  div.onclick = event => {
    div.style.backgroundColor = colors[colorSelection.value];
  };

  drawingBoard.appendChild(div);
  divs.push(div);
}
```

Legg til følgende funksjonalitet:

* Knapp for å viske ut tegnebrettet
* Knapp for å fylle tegnebrettet med valgt farge
* Tegning ved å holde inne venstre musknapp og dra musmarkøren over tegnebrettet
    * Tips: bruk event.buttons == 1 for å sjekke om venstre musknapp er trykt inn
* Flere fargemuligheter
* Et tilfeldig tips/sitat/vits nederst på siden når applikasjonen åpnes
* Frivillig (høyere vanskeliggrad):
    * Å kunne velge tjukkelsen på tegnebørsten