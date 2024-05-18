let marks = [54, 66,77,88,99];
let sum =0;

//for-of loop
// for(let val of marks){
//     sum = sum + val;
// }
// console.log(sum);
// let avg = sum/ marks.length;
// console.log(`avg marks of class = ${avg}`);

let item = [250, 650, 300, 900, 50];
let offer;
for(let i=0; i<5;i++){
    offer = item[i]/10;
    console.log("Value after offer",item[i]-offer); 
}

let arr = [1,2,3,5,7,8];
let a = arr.slice(2,4);
arr.splice(2,2,0,9);
console.log(arr);