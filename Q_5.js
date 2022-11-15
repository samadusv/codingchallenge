//fares at even position
const read = require('readline-sync');
arr = [];
var num = null;
for (let i = 0; i < 6; i++) {
    num = read.question("enter numbers : ")
    if(i % 2 == 0){
        arr.push(num);
    }
    else{
        arr.push(" ");
    }
}
console.log(arr);

//fares at odd positions
const read = require('readline-sync');
arr = [];
var num = null;
for (let i = 0; i < 6; i++) {
    num = read.question("enter numbers : ")
    if(i % 2 == 1){
        arr.push(num);
    }
    else{
        arr.push(" ");
    }
}
console.log(arr);