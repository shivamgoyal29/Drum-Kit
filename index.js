//function for changing animation

function changeAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}

// function to play sound

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
      break;
  }
}

//playing sound by buttons on website

var numberOfDrums = document.getElementsByClassName("drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      var button = this.innerHTML;

      makeSound(button);
      changeAnimation(button);
    });
}

//playing sound by keyboard

document.addEventListener("keydown", function (KeyboardEvent) {
  var x = KeyboardEvent.key;
  makeSound(x);
  changeAnimation(x);
});
