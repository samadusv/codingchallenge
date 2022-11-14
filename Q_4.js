const read = require('readline-sync');
var birth_date = read.question('enter dob in dd-mm-yyyy format : ');
var daym = null;
var monthm = null;
var yearm = null;

var dayc = null;
var monthc = null;
var yearc = null;

var age_in_hours = null;

var current_date = read.question('enter current date : ');
var arr1 = birth_date.split('-');
var arr2 = current_date.split('-');
daym = parseInt(arr1[0]);
monthm = parseInt(arr1[1]);
yearm = parseInt(arr1[2]);

dayc = parseInt(arr2[0]);
monthc = parseInt(arr2[1]);
yearc = parseInt(arr2[2]);

age_in_hours = ((dayc-daym)*24)+((monthc-monthm)*30*24)+((yearc-yearm)*12*30*24);
console.log('his/her age is : '+Math.abs((age_in_hours))+ ' hour');
var age_in_day  = (Math.abs((age_in_hours)))/24;
console.log('his/her age in day is '+age_in_day+ ' days');

var age_in_week  = (Math.abs((age_in_hours)))/168;
console.log('his/her age in week is '+parseInt(age_in_week)+ ' weeks');

var age_in_month  = (Math.abs((age_in_hours)))/720;
console.log('his/her age in month is '+parseInt(age_in_month)+ ' months');

var age_in_year  = (Math.abs((age_in_hours)))/8760;
console.log('his/her age in year is '+parseInt(age_in_year)+ ' years');

var cap = yearm
var x = yearm % 10;
var y = parseInt(yearm/10);
var z = y % 10;
var val = null;
val = parseInt(yearm/100);
if(x == 0 && z==0){
    if(val % 4 == 0){
        console.log('birth year is leap year');
    } 
}
else if(cap % 4 == 0){
    console.log('birth year is leap year');
}
else{
    console.log('birth year is NOT a leap year');
}



