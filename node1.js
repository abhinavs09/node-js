// join two js file in single 
const node2 = require('./node2');
let app = require('./node2');

console.log(node2);

//Filter function in array

let arr = [2,3,5,7,8,9];
let res = arr.filter((item) =>{
    return item >5;
})
console.log(res);

