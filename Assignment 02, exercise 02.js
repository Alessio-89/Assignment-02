//Return the average of the given array rounded down to its nearest integer. The array will never be empty.

const notes = [6, 7, 5, 6, 8, 6]

const calculateAverage = (array) => {
  
  let sum = 0;
   for (let i=0; i < array.length; i++){
    sum += array[i];
   };
  //here I made a for loop to calculate the sum of the array.
  
  console.log(Math.floor(sum/array.length));
  
  //here I did 3 things: 1) I divided the sum by the length of the array 2) I applied the Math.floor() method to round it down to nearest integer and 3) I printed the result to the console. 
  
}

calculateAverage(notes);
