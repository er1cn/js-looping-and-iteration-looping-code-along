// Code your solutions in this file
function writeCards(namesArray, event) {
   const thankYouMessage = [] 
   //namesArray[`Thank you ${name} for ${event}']
   for(let i=0;i < namesArray.length; i++ ) {
thankYouMessage.push (`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
   }
  return thankYouMessage;
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}