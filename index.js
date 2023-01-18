// Code for Dice 1

// To have only numbers between 1 and 6 and floor function to have whole numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource)


// Code for Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innnerHTML = "🚩Player 1 wins!";
}
else if (randomNumber1 < randomNumber2){
document.querySlector("h1").innnerHTML = "🚩Player 2 wins!";
}
else{
  document.querySlector("h1").innerHTML = "🤝Draw";
}
