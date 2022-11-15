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
var age_in_year  = (Math.abs((age_in_hours)))/8760;
//console.log('his/her age in year is '+parseInt(age_in_year)+ ' years');
if(age_in_year < 10){
    console.log('he/she is a kid');
}
else if(age_in_year >= 10 || age_in_year < 30){
    console.log('he/she is a ypung');
}
else if(age_in_year >= 30 || age_in_year<60){
    console.log('he/she is a adult');
}
else{
    console.log('he/she is a old');
}