# JavaScript-Quiz
This is just a small website with a simple JavaScript Quiz

This Website is by no means something I am completely satisfied with. I do enjoy the Logic that was put behind it but there's a lot of room for reformatting for re-organizing the code to look much cleaner.

That being said here was the changelog for this document:

1. Started by creating the skeleton `index.html` with all the sections individually named to help organize my thoughts and the overall structure of the final product.
2. Started the `script.js` by assigning references to the block level elements that constituted a big portion of the flow of the page.
3. Created CSS stylesheets to assign very specific classes for certain elements
4. Assigned a variable to the reference of my Begin button so as to start the quiz
5. Created a function to initialize the timer and the quiz by clicking the Begin button
6. Created an object with 3 properties, each an array. An array of questions, an array of arrays of options for each possible answer and an array with the correct answers.
7. Assigned a reference to each button and created logic to update the text content of the question content HTML as we shift through every question
8. Created an iteration function to change through questions as they are answered. If answered incorrectly the timer goes down by 10 seconds.
9. created a message to display if you answered one previous question wrong.
10. Added functionality to Navigation functions to navigate from the Main Menu to the Highscore table.
11. Added a recorder to save the most recent submission into the highscore table.
12. rendered out the scores on the page.
13. Created a function to clear the scores

Known Bugs:

1. Highscores section only stores the data of the most recent input, not multiple
