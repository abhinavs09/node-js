//Print even number
// for (let i = 1; i <= 100; i++) {
//     if(i%2 == 0){
//         console.log(i);
//     }   
// }

// Guess the right number
let num = 25;
let userNum = prompt("Guess the number");

while(userNum != num){
    userNum = prompt("You enter wrong number: ");

}
console.log("Right");

