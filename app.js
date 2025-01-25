

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
// make a function named isAdult and select parameter in the name of age.
const isAdult = (age) => {
    // put the condition if the age is bigger than 18 years old should be counted as adult
    if (age >= 18) {
        return ("Adult");
    // if the age is less than 18 years old should be Minor
    } else {
        return ("Minor");
    }
}

console.log('Exercise 2 Result:', isAdult(19));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// 1. Make function called isCharAVowel
// 2. isCharAVowel take one parameter UserChar
// 3. If Character is Vowel (a,e,i,o,u) return true.
// 4. else return false

const isCharAVowel = (UserChar) => {
    if (UserChar == "a"){
        return ("true");
    } else if (UserChar == "e") {
        return ("true");
    } else if (UserChar == "i") {
        return ("true");
    } else if (UserChar == "o") {
        return ("true");
    } else if (UserChar == "u") {
        return ("true");
    }  else {
        return ("false")
    }
    
}
console.log('Exercise 3 Result:', isCharAVowel("o"));



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// make a function as generateEmail put name and domain as variables
//
function generateEmail (name, domain) {
    return `${name}@${domain}`
}


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


// Exercise 5: greetUser()



function greetUser (name, greet) {
    return `Good ${greet}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));






/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
// create a funciton of maxOfThree 
// maxOfThree has 3 parameters x y and z

const maxOfThree = (x, y, z) => {
    // make a codition of x bigger or equal to y the result should go to x
    if (x >= y) {
      return x;
    // make another codition for y bigger or equal to z.
    } else if (y >= z){
        // it should return to parameter y
      return y;
      // other than the condition above it should return to z
    } else {
        return z;
    }
  }

console.log('Exercise 6 Result:', maxOfThree(14, 10, 13));



/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

// creat a function called calculateTip.
// make two arguments bill amount and tip percentage

const calculateTip = (tippercentage, billamount) => {
    // then tip percentage should be multiplied by bill amount 
    return tippercentage/100 * billamount
}

console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

// create a function named convertTemperature
// make 
const convertTemperature = (temperature, tlettter) => {
    // make a condtion to convert celcius to Fahrenheit
    if (tlettter == "C"){
        return temperature * 9/5+32
    } else {
        return (temperature - 32)*(5/9)
    }
}

console.log('Exercise 8 Result:', convertTemperature(34, "F"));

