// Sum with function

function sum(x, y){
    s = x+y;
    return s;
}

let val = sum(4, 6);
console.log(val);

//arrowFunction

const arrowSum =(a, b) => {
    console.log(a+b);
};

// Print square using for-each loop
let arr = [2,3,4,5];
arr.forEach((num) =>{
    console.log(num*num);
})

//Find largest value
let num = [2,5,9,5,7];
const max = num.reduce((prev, curr) =>{
    return prev>curr ? prev : curr;
});
console.log(max);

// take input array

let n = prompt("enter a number:");

let a = [];
for(let i=1; i<=n; i++){
    a[i-1] = i;
}
console.log(a);
//calculate product of num(factorial)
let fact = a.reduce((res, curr)=>{
    return res*curr;
});

console.log("factorial =", fact);
