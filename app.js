let answer = prompt(
  "To reveal our contact details, answer this: When was the first Rocky movie released?"
);

if (answer == "1976") {
  alert("Well done Champ! Call us now, let's get training!");
  document.getElementById("rockyImage").style.display = "block";
  document.getElementById("WelcomeChamp").play();
} else {
  alert(
    "Hard luck, Mr. Ivan Drago! You can't train with us yet. Refresh the page and try again if you wish!"
  );
  document.body.style.backgroundColor = "#ff0000";
  document.getElementById("WelcomeChamp").style.display = "none";
}
