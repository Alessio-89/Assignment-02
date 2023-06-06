const arrayNumbers = [1, 3, -1, 5, -3, 10];

const positivesAndSum = (array) => {
  
  let sum = 0;

  let positiveNums = [];
//here I created an empty array


   array.forEach(element => {
      if (element > 0) {
         sum += element; 
         positiveNums.push(element);
      }; 
     //the above code iterates through the array and sums all positive numbers, then it pushes them to the empty array I created.
   }
   );


console.log("the positive numbers are " + positiveNums.join(', ') + ", and their sum is " + sum);
};



positivesAndSum(arrayNumbers);



  
  




    

