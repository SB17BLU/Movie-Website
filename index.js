function roll_dice() {
  console.log("Let's generate!")

  var random_number = Math.round(Math.random()* 10 + 1);
  console.log(random_number);

  var image = "";

  if (random_number == 1) {
    image = "Robin-Hood.jpg"
  }

  if (random_number == 2) {
    image = "Rio.jpg"
  }

  if (random_number == 3) {
    image = "101Dalmatians.jpg"
  }

  if (random_number == 4) {
    image = "MaryPoppins.jpg"
  }

  if (random_number == 5) {
    image = "Bambi.jpg"
  }

  if (random_number == 6) {
    image = "PeterPan.jpg"
  }

  if (random_number == 7) {
    image = "Aristocats.jpg"
  }

  if (random_number == 8) {
    image = "TheRescuers.jpg"
  }

  if (random_number == 9) {
    image = "Aladdin.jpg"
  }

  if (random_number == 10) {
    image = "LionKing.jpg"
  }

  if (random_number == 11) {
    image = "Lady-and-the-Tramp.jpg"
  }

  document.querySelector("img").src = image;

}
