const arrayNumbers = [1, 3, -1, 5, -3, 10];

const positivesAndSum = (array) => {
  
  let sum = 0;

  let positiveNums = [];



   array.forEach(element => {
      if (element > 0) {
         sum += element; 
         positiveNums.push(element);
      }; 
   }
   );


console.log("the positive numbers are " + positiveNums.join(', ') + ", and their sum is " + sum);
};



positivesAndSum(arrayNumbers);



  
  




    

