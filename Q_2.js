const read = require('readline-sync');
var c = read.question('standard amount required : ');
var cost = parseInt(c);
var pay_amount = null;
var rem = null;
var type = read.question('enter time zone am/pm : ');
var t = read.question('enter the time: ');
var time = parseFloat(t);


if(type == 'am' && (time >= 6.00 || time <= 9.00))
{
    rem = cost*0.1;
    pay_amount = cost + (rem);
    console.log(pay_amount);
}
else if((type == 'am' && (time >=9.01 || time <= 11.59 )||(type =='pm' && time >= 12.00 || time <= 5.00)))
{
    rem = cost*0.2;
    pay_amount = cost + (rem);
    console.log(pay_amount);
}
else if(type = "pm" && (time >= 5.01 || time <= 11.00))
{
    rem = cost*0.07;
    pay_amount = cost + (rem);
    console.log(pay_amount);
}
else if((type == 'pm' && (time >= 11.00 || time <=11.59) || (type == 'am' && time >= 6.00 || time <= 12.00)))
{
    rem = cost*0.15;
    pay_amount = cost + (rem);
    console.log(pay_amount);
}

