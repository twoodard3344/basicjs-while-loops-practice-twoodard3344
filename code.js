// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

/***********************/
/* While Loops         */
/***********************/

// To prevent you from having to define a different index variable for ever activity,
// We are defining this index variable for you here.  Use this as your index variable in all
// of your loops. But remember to reset it to zero (or whichever number you wish to start at), index = 0; before each of your loop statements!
let index;

// ----------------------------------------------------------------------------------------------
console.log("Exercise One"); // Do not modify the lines like this before each exercise, these are to make the console output more readable :)
// - Change the following loop.
//   The loop below will run twice, logging 0 and 1 to the console.
//   Modify the loop so that it runs 10 times, logging 0 to 9 to the console.
//
// Write your code here 👇

index = 0;
while (index < 10) {
  console.log(index);
  index++;
}


// ----------------------------------------------------------------------------------------------
console.log("Exercise Two");
// - Fix the following infinite loop.
//   Uncomment the code below.
//   Hint: Select all four lines, and then press CMD+/ (or Ctrl+/ for windows/linux)
//         This will uncomment all four lines at once!
//   There is an infinite loop!  What is it missing?
// - Fix the loop so that it stops at 15.
//
// Write your code here 👇

index = 0;
while (index <= 15) {
  console.log(index);
  index++;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Three");
// - Create a new while loop below.
// - Make your loop count from 1 to 20, logging each number to the console.
//   (This should include the number 20, but not include the number 0)
// - Hint: Look at the reading, there is an example of this.
// - Hint 2: Remember to set your initial index value
// Write your code here 👇



// ----------------------------------------------------------------------------------------------
console.log("Exercise Four");
// - Create another while loop
// - Make your loop count from 2 to 20, logging only EVEN numbers to the console.
//   2 4 6 8 10 12 14 16 18 20
//   (This should include the number 20, and the number 2, but not include the number 0)
//
// Write your code here 👇
index = 2;
while (index <= 20){
  console.log(index);
  index += 2;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Five");
// - Create another while loop
// - Make your loop count from 1 to 19, logging only ODD numbers to the console.
//   1 3 5 7 9 11 13 15 17 19
//   (This should include the number 9, and the number 1, but not include the number 0)
//
// Write your code here 👇
index = 1;
while (index <= 19){
  console.log(index);
  index += 2;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Six");
// - Create another while loop
// - Make your loop count from 5 up to 100, logging only multiple of 5 to the console.
//   5 10 15 20 ... 90 95 100
//   (This should include the number 100, and the number 5)
//
// Write your code here 👇
index = 5;
while (index <= 100){
  console.log(index);
  index += 5;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Seven");
// - Create another while loop
// - Make your loop count BACKWARDS, from 20 to 1, logging each number to the console.
//   20 19 18 17 ... 2 1
//   (This should include the number 20, but not include the number 0)
//
// Write your code here 👇
index = 20;
while ( index >= 1){
  console.log(index);
  index --;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Eight");
// - Create another while loop
// - Make your loop count BACKWARDS, from 20 to 2, logging every EVEN number to the console.
//   20 18 16 14 ... 4 2
//   (This should include the number 20, but not include the number 0)
//
// Write your code here 👇
index = 20;
while(index >= 2)
{
  console.log(index);
  index -= 2;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Nine");
// - Create another while loop
// - Make your loop count BACKWARDS, from 19 to 1, logging every ODD number to the console.
//   19 17 15 13 ... 3 1
//   (This should include the number 19, but not include the number 0)
//
// Write your code here 👇
index = 19;
while (index >= 1){
  console.log(index);
  index -= 2;
}

// ----------------------------------------------------------------------------------------------
console.log("Exercise Ten");
// - Create another while loop
// - Make your loop count BACKWARDS, from 100 down to 5, logging each multiple of 5 to the console.
//   100 95 90 ... 15 10 5
//   (This should include the number 100, but not include the number 0)
//
// Write your code here 👇
index = 100;
while ( index >= 5){
  console.log(index);
  index -= 5;
}


// When you are done with all of the exercises, check your console output to make sure it
// matches the expected output of each exercise and remove any extraneous console.log()
// statements from your code.
