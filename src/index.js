/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  );
};
theCoders("jennie", "tom");
/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */

theCoders("eve");

/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */

const longestName = (driver, navigator) => {
  if (driver.length > navigator.length) {
    console.log(`The driver has the lnogest name`);
  } else if (navigator.length > driver.length) {
    console.log(`The navigator has the longest name`);
  } else {
    console.log(`The driver and the navigator has equally long names`);
  }
};

longestName("Evelinn", "Andres");

/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */

const oldOrYoung = () => {
  const age = prompt("How old are you?");

  if (age < 10) {
    alert("Wow, you're a baby!");
  } else if (age < 20) {
    alert("You're so little");
  } else if (age < 50) {
    alert(`${age}! You're younger than Dolly parton`);
  } else {
    alert(`You're older than me!`);
  }
};

oldOrYoung();

const calculationTest = () => {
  /*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
  let number = Math.floor(Math.random() * 100);
  let answer = Math.floor(number * 2);
  let userAnswer = prompt(`What is ${number} * 2?`);

  if (userAnswer == answer) {
    alert("That is correct!");
  } else {
    alert(`The answer is ${answer}`);
  }
};

calculationTest();

/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
