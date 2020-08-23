// Retrieve the needed HTML elements:
let colorSelection = document.getElementById("colorSelection");
let drawingBoard = document.getElementById("drawingBoard");
let clearButton = document.getElementById("clearButton");
let fillButton = document.getElementById("fillButton");

// Associate color names to RGB values
let colors = {
  Red: "rgb(255, 0, 0)",
  Green: "rgb(0, 255, 0)",
  Blue: "rgb(0, 0, 255)",
  White: "rgb(255, 255, 255)",
  Black: "rgb(0, 0, 0)"
};

// The drawingBoard squares will be stored in this table:
let divs = [];

// Create the drawingBoard squares:
for (let i = 0; i < 600; i++) {
  let div = document.createElement("div");

  div.style.height = "20px";
  div.style.width = "20px";
  div.style.float = "left";
  div.style.backgroundColor = colors["White"];

  div.mouseIsOver = false;
  div.onmouseover = event => {
    window.onmousemove = event => {
      if (event.buttons == 1) {
        //console.log("Mouse held down");
        div.style.backgroundColor = colors[colorSelection.value];
      }
    };
  };
  div.onclick = event => {
    div.style.backgroundColor = colors[colorSelection.value];
  };
  drawingBoard.appendChild(div);
  divs.push(div);
}

let fill = color => {
  for (i = 0; i < divs.length; i++) {
    let div = divs[i];
    div.style.backgroundColor = colors[color];
    //console.log("Filling with color", color);
  }
};

clearButton.onclick = () => {
  fill("White");
};

fillButton.onclick = () => {
  fill(colorSelection.value);
};

let quotes = [
  "Love For All, Hatred For None. – Khalifatul Masih III",
  "Change the world by being yourself. – Amy Poehler",
  "Every moment is a fresh beginning. – T.S Eliot",
  "Never regret anything that made you smile. – Mark Twain",
  "Die with memories, not dreams. – Unknown",
  "Aspire to inspire before we expire. – Unknown",
  "Everything you can imagine is real. – Pablo Picasso",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "Whatever you do, do it well. – Walt Disney",
  "What we think, we become. – Buddha"
];

printQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber];
};
printQuote();
