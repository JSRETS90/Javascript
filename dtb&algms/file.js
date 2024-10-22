/*Array!

lets start by creating an array of numbers*/

let numbers = [1, 2, 4, 8];

console.log(numbers);/*here we should see our array [1,2,4,8]*/
console.log(numbers[3]);/*here we are looking for the item in the index number 3 of the array, we should get 8*/

numbers[4] = 16;/*we can add an item to te array by using index, "[4]" and assigns value.*/

console.log(numbers);/*[ 1, 2, 4, 8, 16 ] is the result after adding "[4]" with the value of 16*/

/* there are times when we don't know the length of tha array and we just want to add an item at the end, to do that we use the method ".push()" */

numbers.push(32);

console.log(numbers);
