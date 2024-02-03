// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a mouseover event listener to move the "No" button randomly
noButton.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});

// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Add a click event listener to create confetti
yesButton.addEventListener("click", () => {
  var confettiElement = document.getElementById("confetti-canvas");
  var confettiSettings = {
    target: confettiElement,
    max: 729,
    size: 1,
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: 25,
    rotate: true,
    start_from_edge: true,
    respawn: true,
  };

  yesButton.style.display = "none";
  noButton.style.display = "none";

  var gif = document.getElementById("gif");
  var header = document.getElementById("main");
  header.style.display = "none";
  gif.style.display = "none";

  let container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.height = "100vh"; // Set the height to full viewport height
  container.style.position = "absolute";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(container);
  // Display the squishy.gif

  let squishyGif = document.createElement("img");
  squishyGif.src = "cute.gif";
  squishyGif.style.width = "250px"; // Set the width to your desired size
  squishyGif.style.height = "auto";
  // Set the opacity for transparency
  container.appendChild(squishyGif);

  //change the style of the confetti canvas
  confettiElement.style.position = "absolute";
  confettiElement.style.top = "0";
  confettiElement.style.left = "0";
  confettiElement.style.width = "100%";
  confettiElement.style.height = "100%";
  confettiElement.style.zIndex = "1000";

  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  let roundedBox = document.createElement("div");
  roundedBox.style.backgroundColor = "#ffffff"; // Set the background color for the rounded box
  roundedBox.style.borderRadius = "10px"; // Set the border radius for rounded corners
  roundedBox.style.padding = "20px"; // Set padding for better visibility

  let p = document.createElement("p");
  p.innerText = "        !!Yaaayyy!!     \nyou made the right choice 😊 \nDM me the time and venue !!!";
  p.style.fontSize = "2rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center"; 
  roundedBox.appendChild(p);

  container.appendChild(roundedBox);
});
