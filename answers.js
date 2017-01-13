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



