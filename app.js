let numberPicked;

buttonOne = document.getElementById("first-button");

buttonTwo = document.getElementById("second-button");

buttonThree = document.getElementById("third-button");
buttonFour = document.getElementById("fourth-button");
buttonFive = document.getElementById("fifth-button");

buttonOne.addEventListener("click", function () {
  numberPicked = buttonOne.innerHTML;
});

buttonTwo.addEventListener("click", function () {
  numberPicked = buttonTwo.innerHTML;
  console.log(numberPicked);
});
buttonThree.addEventListener("click", function () {
  numberPicked = buttonThree.innerHTML;
});
buttonFour.addEventListener("click", function () {
  numberPicked = buttonFour.innerHTML;
});
buttonFive.addEventListener("click", function () {
  numberPicked = buttonFive.innerHTML;
});

//this is meant to be for the toggle
function submit() {
  let button = document.getElementById("thankyou-card");
  let card= document.getElementById("rating-card")
   
  card.style.display === "none";
  button.style.display === "block";
  console.log("string")
  
}
   
let submitButton = document.querySelector("#btn");
submitButton.addEventListener("click", submit);