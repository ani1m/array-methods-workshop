/* 1
Write a function called printPositives that takes an array and uses the 
forEach method to print only the positive numbers.
*/

function printPositives(arr) {
    arr.forEach(function(value, index, arr){
        if(value > 0 ) {
            console.log(value);
        }
    })
}

    

var arrayyyy = [1, 2, -3, 4, 5, 0];
printPositives(arrayyyy);

/* 2
Re-do exercise 1 by first filtering the input array, 
and then printing the numbers from the filtered array. 
Your code will look something like: return arr.filter(...).forEach(...).
*/
function printPositives(arr) {
   return arr.filter(function(value) {
         return value > 0;
   }).forEach(function(x) {
       console.log(x);
   })
}
var arrayyyy = [1, 2, -3, 4, 5, 0];
printPositives(arrayyyy);

/* 3
Write a function called filterArray that takes a callback function and 
an array as arguments. Your filterArray function should return a new array 
that contains only the elements where the callback function returns true.
*/
function cb(arr) {
    return true;
}
function filterArray(cb,arr) {
    return arr.filter(cb);
    
}

console.log(["", 4, true, false, "fun", 1].filter(cb));

/* 4
Write a function called longestWord that takes a string as argument, 
and returns the longest word in the string. You should use 
Array.prototype.reduce to do your work.
*/

var longString = "Write a function called longestWord";

function longestWord(str) {
    return str.split(" ").reduce(function(accu, element){
        if(accu.length > element.length) {
            return accu;
        } else {
            return element;
        }
    }, "")
}
console.log(longestWord(longString));

/* 5
Write a function called countVowels that takes a string and returns 
the number of vowels in the string. You should use Array.prototype.reduce 
to do your work.
*/

var phrase = "The quick brown fox";
var phrase2 = "I'm having trouble with indexOf in this context"

function countVowels(str) {
    return str.split("").reduce(function(vowCount, current){
        if(current.match(/[aeiou]/gi)) {
            vowCount++;
        }
        return vowCount;
    }, 0)
}
console.log(countVowels(phrase));
console.log(countVowels(phrase2));

/* 6
Write a function called highLow that takes an array of numbers, and returns 
an object with a property highest containing the highest number, and a 
property lowest containing the lowest number, using Array.prototype.reduce.
*/

var numbers = [ 1, -10, 20, 40, 5,];
function highLow(arr) {
    var high = arr.reduce(function(accu, element){
        if(accu > element) {
            return accu;
        }
        else {
            return element;
        }
    })
    var low =  arr.reduce(function(accu, element){
        if(accu < element) {
            return accu;
        }
        else {
            return element;
        }
     })
     return {
         highest: high,
         lowest: low
     }
}
console.log(highLow(numbers));

/* 7
Write a function called countChars that takes a string, and returns an object 
where the keys are letters, and the value is the number of times that letter 
appears.
*/

var saying = "Phrase to count number of characters in my string";

function countChars(str) {
    var letter = {};

    str.split("").filter(function(countLetter) {
           return countLetter !== ' ';
    })
    .forEach(function(countLetter){
        if(letter[countLetter]) {
            letter[countLetter] = letter[countLetter] + 1;
        }
        else {
            letter[countLetter] = 1;
        }
      
    });
    return letter;
}

console.log(countChars(saying))

/* 8
In this exercise, your goal is to create a negate function. negate 
takes one parameter: another function. negate should return a function 
that, when called, will return the opposite of what the input function 
would return on the same input.
*/

function negate(fn) {
    return function() {
      return !fn();
    } 
}

function isEven(num) {
  return num % 2 === 0;
}

function isEmpty(someList) {
  return someList.length === 0;
}


var isOdd = negate(isEven);
console.log(isOdd(11));

var isNotEmpty = negate(isEmpty) 
console.log(isEmpty("someList"));

/* 9 Challenge
Provide a more complete version of the negate function that will work with any 
number of parameters. For example, it should work with the following:
*/

function negate(fn) {
    return function() {
        return !fn(fn.arguments);
    }   
    }

function firstDividesSecond(first, second) {
  return second % first === 0;
}

var firstDoesNotDivideSecond = negate(firstDividesSecond);
console.log(firstDoesNotDivideSecond(3,4));

/* Find by ID
Write a function called peopleById that takes an array of people and returns 
an object where each person is keyed by their unique ID.
*/

  var people = [

    {
      "id": "KeXoYg92is",
      "firstName": "John",
      "lastName": "Smith",
      "email": "john@smith.com"
    },
    {
      "id": "m7LPbJYSUg",
      "firstName": "John",
      "lastName": "Vader",
      "email": "vader@darkside.com"
    },
 
    {
      "id": "NkALmSWtUp",
      "firstName": "Donald",
      "lastName": "Duck",
      "email": "don@disney.com"
    } 
];

  function peopleById () {
      return people.reduce(function(accu, obj){
          accu[obj.id] = obj;
          return accu;
      }, {});
  }  
  console.log(peopleById());
  
/* Find by First Name
We want to create a function called peopleByFirstName that will take an array 
of people and return something that looks like this:
*/
var people = [

    {
      "id": "KeXoYg92is",
      "firstName": "John",
      "lastName": "Smith",
      "email": "john@smith.com"
    },
    {
      "id": "m7LPbJYSUg",
      "firstName": "John",
      "lastName": "Vader",
      "email": "vader@darkside.com"
    },
 
    {
      "id": "NkALmSWtUp",
      "firstName": "Donald",
      "lastName": "Duck",
      "email": "don@disney.com"
    } 
];

function peopleByName () {
      return people.reduce(function(accu, obj){
          accu[obj.firstName] = obj;
          return accu;
      }, {});
  }  
  console.log(peopleByName());
  
  
/* High low 2
  Expanding on a previous exercise, write a function called highLowTwo that 
  takes an array of numbers, and returns the higest, second highest, lowest, 
  and second lowest numbers.
*/
  
function highLow2(arr) {
    var high = arr.reduce(function(accu, element){
        if(accu > element) {
            return accu;
        }
        else {
            return element;
        }
    });
    
    var secondHighest = arr.reduce(function(accu, element){
        if(element > accu && element < high) {
            return element;
        }
        else {
            return accu;
        }
    })
    
    var secondLowest = arr.reduce(function(accu, element){
        if(element < accu && element > low) {
            return element;
        } else {
            return accu;
        }
    })
    
    var low =  arr.reduce(function(accu, element){
        if(accu < element) {
            return accu;
        }
        else {
            return element;
        }
     })
     
     return {
         highest: high,
         secondHighest: secondHighest,
         secondLowest: secondLowest, 
         lowest: low
     }
}
var numbers2 = [ 1, -10, 20, 40, 5, 450, -1999];
console.log(highLow2(numbers2));


