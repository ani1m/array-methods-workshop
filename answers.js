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

