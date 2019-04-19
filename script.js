function changeImage(id) {
    let src = document.getElementById(id).firstElementChild.src;
 
    let result = src.split("_");
    let number = parseInt(result[1].charAt(0));
 
    if(number === 6) number = 1; else number++;
 
    let newSrc = "img/myImg/pic_" + number + ".png";
    document.getElementById(id).firstElementChild.src=newSrc;
 }
 
 const guessSelection = document.querySelectorAll('.guess');

 console.log(guessSelection);

 console.log(guessSelection.length);
 
 for(let i = 0; i < guessSelection.length; i++) {
  (function(index) {
    guessSelection[index].addEventListener("click", function() {
       let id = document.querySelectorAll('.guess')[index].id;
       changeImage(id);
     })
  })(i);
 }