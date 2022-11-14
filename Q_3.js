const read = require('readline-sync');
var arr = [];
var num = null;

for (let i = 0; i < 4; i++) {
    num = read.question('enter numbers :  ');
    arr.push(parseFloat(num));
}
// //ascending
// var temp = null;
// for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr.length-1; j++) {
//         if(arr[j]> arr[j+1]){
//             temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//    }
// }
// console.log('ascended array is:');
// console.log(arr);
// //descending
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length-1; j++) {
//          if(arr[j] < arr[j+1]){
//              temp = arr[j+1];
//              arr[j+1] = arr[j];
//              arr[j] = temp;
//          }
//     }
//  }
//  console.log('descended array is:');
//  console.log(arr);

 //search
 
//  var x = read.question('enter number to be search : ');
//  var flag = [];
//  for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == x){
//         console.log(`the element ${arr[i]} present at ${i} position`);  
//     }
//     else{
//         flag.push(0);
//     }
//  if(flag.length == arr.length){
//     console.log('number not found');
//  }   
// }

//maximum and minimum
// console.log('maximumn numberv is :')
// var temp = null;
// for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr.length-1; j++) {
//         if(arr[j]> arr[j+1]){
//             temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//    }
// }
// console.log('max number is:');
// console.log(arr[arr.length-1]);
// console.log('min number is:');
// console.log(arr[0]);

//duplicate elements
// var test = [];
// var temp = null;
// tem = null;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < (arr.length)-i-1; j++){
        
//             if(arr[j] == arr[j+1]){
//                 if(test[i] != arr[j]){
//                 test.push(arr[j+1]); 
//                 }
//                 temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;    
            
//         }
//             tem = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = tem;
//         } 
// }

// console.log(test);
