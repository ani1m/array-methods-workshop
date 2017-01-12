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
