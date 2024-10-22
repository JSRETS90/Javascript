/*Array!

lets start by creating an array of numbers*/

let numbers = [1, 2, 4, 8];

console.log(numbers);/*here we should see our array [1,2,4,8]*/
console.log(numbers[3]);/*here we are looking for the item in the index number 3 of the array, we should get 8*/

numbers[4] = 16;/*we can add an item to te array by using index, "[4]" and assigns value.*/

console.log(numbers);/*[ 1, 2, 4, 8, 16 ] is the result after adding "[4]" with the value of 16*/

/* there are times when we don't know the length of tha array and we just want to add an item at the end, to do that we use the method ".push()" */

numbers.push(32);/* adds [32] to the end of the array. */

console.log(numbers); /* [ 1, 2, 4, 8, 16, 32 ] is shown */

numbers.unshift(0);/* using ".unshift" we can add an item at the start of the array*/

console.log(numbers);/* a 0 is now visible in the array*/

let lastNumber = numbers.pop();/* we can take the las value and store it in a new variable called "lastNumber" using the method " .pop() " which grabs the last item form the array */ 

console.log(numbers);/*here we see the array without the last item [32]  */
console.log(lastNumber); /**32 is shown */

let firstNumber = numbers.shift();/**same as with .pop(), we can take the first item in the array with ".shift()", we'll store the value in a variable called firstNumber */

console.log(numbers);/*here we see the array without the last item [32]  */
console.log(firstNumber);/**0 is shown */