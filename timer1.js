// process.stdout.write('\x07');

//  EDGE CASES
//No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.



// for (const element of message){
//   console.log("this is the value of time:", time)
//   setTimeout(() => process.stdout.write('\x07'), time += 1000)
// }
// }

// timer()


// function sayHi(phrase, who) {
//   console.log(phrase + ', ' + who);
// }


//node timer1.js 10 3 5 15 9 

 
  
  let userInput = process.argv.slice(2);
  console.log('myInput:', userInput);
  for (const element of userInput){
    if (element < 0){
      return;
    }
    if (isNaN(element)){
      return;
    }

    setTimeout(() =>  process.stdout.write('\x07'), element * 1000);

   // if < 0 return 
   // if isNaN() return 
  };
 
  

  

  



