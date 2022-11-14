const read = require('readLine-sync');
data = null;
names = [];
//input each names
for (let i = 0; i < 4; i++) {
    data = read.question(`enter the names: `);
    names.push(data);
}

//sorting names-  ascending order
// var temp = "";
// for (let a = 0; a < names.length; a++) {
//    for (let b = 0; b < names.length-a-1; b++) {
//         if(names[b]>names[b+1]){
//             temp = names[b];
//             names[b] = names[b+1];
//             names[b+1] = temp;
//         }
//    } 
// }
// descending order

// for (let a = 0; a < names.length; a++) {
//     for (let b = 0; b < names.length-a-1; b++) {
//          if(names[b]<names[b+1]){
//              temp = names[b];
//              names[b] = names[b+1];
//              names[b+1] = temp;
//          }
//     } 
//  }

// finding names
// var key = [];
// var check = read.question('enter your required name: ');
// for (let k = 0; k < names.length; k++) {
//     if(check == names[k]){
//         console.log(`${names[k]} is present`);
//         break;
//     }
//     else{
//         key.push(1);
//     }
// }
// if(key.length == names.length){
//     console.log('not found');
// }

// length of elements
// var x = null;
// for (let i = 0; i < names.length; i++) {
//    x = names[i].length
//     console.log(`length of ${names[i]} is = ${x}`);
// }

//splitting name
var duplicate = [...names];
// for(let i =0;i<duplicate.length;i++)
// {
//     let name1 = duplicate[i].split(' ');
//     console.log(name1);
// }
// console.log(" ");

// duplicate


for(let i=0;i<duplicate.length;i++){
    for(let j=i+1;j<duplicate.length;j++){
        if(duplicate[i]==duplicate[j]){
            console.log(duplicate[i]);
        }
    }
}