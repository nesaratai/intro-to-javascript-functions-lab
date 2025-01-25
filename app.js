

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
// it takes two argument temperature and tletter (temperature letter)
const convertTemperature = (temperature, tlettter) => {
    // make a condtion to convert celcius to Fahrenheit
    if (tlettter == "C"){
        return temperature * 9/5+32
    // if its not a celcius it should change to celcius 
    } else {
        return (temperature - 32)*(5/9)
    }
}

console.log('Exercise 8 Result:', convertTemperature(34, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

// create a function named basicCalculator
// it takes two numbers and one string should define the four basic functions
const basicCalculator = (n, m, basicfunc) => {
    // add condition for each basic function "add" , "substract" , "multiply" and "divide"
    if (basicfunc =="substract") {
        return (n)-(m)
    } else if (basicfunc == "add") {
        return (n)+(m)
    } else if (basicfunc == "multiply") {
        return (n)*(m)
    } else {
        return n/m
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));



/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

// create a function called calculateGrade
// it takes a paramtere we call it score

const calculateGrade = (score) => {
    // make conditon for each score we have. A', 80-89 is a 'B', 
    //and 70-79 is a 'C', 60-69 is a 'D and anything lower than a 60 is an 'F'.
    if (score >= 90) {
        return "A"
    } else if (score <=89, score >= 80){
        return "B"
    } else if (score <= 79, score >= 70){
        return "C"
    } else if (score <= 69, score >= 60){
        return "D"
    } else {
        return "F"
    }
        
}

console.log('Exercise 10 Result:', calculateGrade(60));


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

// create a function createUsername
// it takes two parameters fname and lname
const createUsername = (fname, lname) => {
    // slice the the firstname and lastname in the first three characters
    let firstname = fname.slice(0, 3)
    let lastname = lname.slice(0, 3)
    // count the total of the characters
    let total =  fname.length + lname.length
    // combine the first three characters of firstname and lastname and the totatl of characters
    return (firstname + lastname + total)

}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));









