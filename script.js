// GLOBAL VARIABLES
let guessArray = [];
let resultArray = [];
let row = 1; // start guessing from the first row
let won = 0;

function createResult() {
   resultArray.length = 0; // first empty array if exists
   for (i = 0; i < 4; i++) {
      resultArray[i] = Math.floor((Math.random() * 6) + 1);
   }
   console.log(resultArray);
}
/* compare guessArray and resultArray and create winArray for display*/
function checkResult(guessArray) {
   let tempArray = resultArray.slice();
   let winArray = [];
   for (i = 0; i < 4; i++) { // first to find out if number is in array
      let index = tempArray.indexOf(guessArray[i]);
      if (index >= 0) {
         tempArray.splice(index, 1);
         winArray.push(0);
      }
   }
   // second loop to discover if number is in right place
   for (i = 0; i < 4; i++) {
      if (guessArray[i] === resultArray[i]) {
         // replace the first 0 appearance with 1
         for (j = 0; j < winArray.length; j++) {
            if (winArray[j] === 0) {
               winArray[j] = 1;
               break;
            }
         }
      }
   }
   showWin(winArray);
}
/* show win result number of right guesses */
function showWin(winArray) {
   let count = 0;
   for (let i = 0; i < winArray.length; i++) {
      let id = "win_" + row + "_" + i;
      let newSrc = "";
      if (winArray[i] === 1) {
         count++;
         newSrc = "img/win_1.png";
      } else {
         newSrc = "img/win_0.png";
      }
      document.getElementById(id).src = newSrc;
   }

   if (count == 4) {
      won = 1; //assign global won variable to 1
      revealResult(1);
   }

   enableNextRow();
}

function enableNextRow() {
   //hide ok button
   let buttonId = "mm_" + row + "_ok";
   document.getElementById(buttonId).style.opacity = "0";

   if (row < 6) {

      //current enable class becomes disabled
      //add enable class to next row
      for (i = 0; i < 4; i++) {
         let disable = "pic_" + row + "_" + i;
         let enable = "pic_" + (row + 1) + "_" + i;
         document.getElementById(disable).classList.remove('enabled');
         document.getElementById(disable).classList.add('disabled');
         if (won === 0) { // don't show the next row if game is won
            document.getElementById(enable).classList.remove('disabled');
            document.getElementById(enable).classList.add('enabled');
         }
      }

      //update global row variable
      row++;
   } else {
      revealResult();
   }
}

/* Reveal the result*/
function revealResult() {
   for (let i = 0; i < resultArray.length; i++) {
      let id = "result_" + i;
      let newSrc = "img/pic_" + resultArray[i] + ".png";
      document.getElementById(id).firstElementChild.src = newSrc;
   }

   //call popup with won argument popUp(won);
   popUpOver();
}


function popUpOver() {
   let modal1 = "";
   let span1 = "";
   if (won === 1) {
      modal1 = document.getElementById("modalWon");
      span1 = document.getElementById("closeWon");

   } else {
      modal1 = document.getElementById("modalLost");
      span1 = document.getElementById("closeLost");
   }
   modal1.style.display = "block";
   span1.onclick = function () {
      modal1.style.display = "none";
   }
}

function changeImage(id) {
   let x = document.getElementById(id);
   number = parseInt(x.getAttribute("data-value"));

   if (number === 6) {
      number = 1;
   } else {
      number++;
   }

   let newSrc = "img/pic_" + number + ".png";
   x.firstElementChild.src = newSrc;
   x.setAttribute("data-value", number);
}


/* Create new guess array after every click */
function createGuessArray() {
   let currentRow = document.getElementsByClassName("enabled");
   guessArray = []; //delete guessArray
   for (let i = 0; i < currentRow.length; i++) {
      (function (index) {
         let x = document.getElementById(document.getElementsByClassName("enabled")[index].id);
         number = parseInt(x.getAttribute("data-value"));
         guessArray.push(number);
      })(i);
   }
   showOkButton();
}

/* Show ok button for the current row only if all pegs are present */
function showOkButton() {
   let buttonId = "mm_" + row + "_ok"

   let x = guessArray.includes(0);
   if (!x) {
      document.getElementById(buttonId).style.opacity = "1";
   }
}

/* functions called at the game start*/
createResult();

const guessSelection = document.getElementsByClassName("guess");

for (let i = 0; i < guessSelection.length; i++) {
   (function (index) {
      guessSelection[index].addEventListener("click", function () {
         let id = document.getElementsByClassName("guess")[index].id;
         changeImage(id);
         createGuessArray(id);
      })
   })(i);
}

const buttonSelection = document.getElementsByClassName("ok_btn");

for (let i = 0; i < buttonSelection.length; i++) {
   (function (index) {
      buttonSelection[index].addEventListener("click", function () {
         //  let id = document.getElementsByClassName("ok_btn")[index].id;
         checkResult(guessArray);
      })
   })(i);
}

// RELOAD PAGE ON NEW GAME BUTTON

document.getElementById("newGameBtn").addEventListener("click", function () { location.reload() });

//POP-UP RULES

document.getElementById("rulesBtn").addEventListener("click", function () {

   let modal = document.getElementById("modalRules");
   let btn = document.getElementById("rulesBtn");
   let span = document.getElementById("closeRules");

   modal.style.display = "block";

   span.onclick = function () {
      modal.style.display = "none";
   }

});

/* START GAME ON CHALLENGE CLICKED

document.getElementById("challenge").addEventListener("click", function () { location.reload();
document.getElementById("challenge").style.display = "none";
document.getElementById("game").style.display = "grid";
document.getElementById("game").style.alignItems = "center";
document.getElementById("game").style.justifyContent = "center";
});
*/


