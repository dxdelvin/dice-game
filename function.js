// Making Numbers Random from 1-6 only
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Random Dice Image variable created!
var randomDiceImage = "dice" + randomNumber1 + ".png";
// the source file name and the above variable is added
var randomImageSource = "images/" + randomDiceImage;
// here we tried to select the img element from html
var changeImage = document.querySelectorAll("img")[0];
changeImage.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var changeImage2 = document.querySelectorAll("img")[1];
changeImage2.setAttribute("src", randomImageSource2);

if (randomNumber1 === randomNumber2) {
    var select = document.querySelectorAll("h1")[0];
    select.innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
    var select = document.querySelectorAll("h1")[0];
    select.innerHTML = "Player 1 is a Winner";
} else {
    var select = document.querySelectorAll("h1")[0];
    select.innerHTML = "Player 2 is a Winner";
}