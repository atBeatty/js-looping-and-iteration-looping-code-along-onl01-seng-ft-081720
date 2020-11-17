// Code your solutions in this file

function writeCards(arr, str) {
    let messageArray = []
    for(let i=0; i<arr.length; i++) {
    messageArray.push((`Thank you, ${arr[i]}, for the wonderful ${str} gift!`))
    }
return messageArray;
}

function countDown(num) {
    for(let i=num; i>=0; i--){
        console.log(i)
        
    }
}