# Final_project_mastermind
Final project for Front-end programming course as mastermind game in vanilla JS and CSS.

This is an implementation of a Mastermind game built with HTML5, CSS and JS, with no external libraries. This old game now has new skin, pegs are replaced with South Park characters. 

START

When you open the game function createResult() is called. This function empty array if exist and then creates new result array. You can click only on pegs who has class enabled. Pegs are changed by click with changeImage(id) function. When all four pegs in a row are selected, ok button is revealed. Click on ok button calls checkResult() function that compares the guess array and result array, shows number of pegs on right and wrong place (showWin() function). If guess is correct and the player has won, global won variable  is set to 1 and revealResult() function is called which shows modal popup.  If the guess is not correct, enables next guessing row with enableNextRow() function. revealResult() function is also called when the last guess is done. If the global variable won is 1 shows popup modalWon, otherwise modalLost. 

MORE 

If you want to know more about the game itself, learn how to crack the code, see my school, click on hint button. At the bottom of the page, there is a github link to my repository.  

TO DO LIST
    • RESPONSIVE DESIGN
    • EASY, MEDIUM AND HARD LEVEL
    • TIMER
    • LOG IN
    • LEADERBOARD
    • SOUND
    • CHALLENGE FRIENDS
    • SEO
