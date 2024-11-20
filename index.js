// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
/*returns an array of thank you messages for each name provided to the function*/
wrapGifts(gifts);
  function writeCards(namesArray, eventName){
    let messages = [];
    debugger;
for(let i=0; i<namesArray.length; i++){
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
    }
    return messages;
}

/*log numbers counting down from the provided number to 0*/
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}
const result = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(result);

  
