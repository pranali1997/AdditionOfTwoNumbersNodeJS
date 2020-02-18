var sum=require('../main/sum.js')

module.exports={

    summation(val1,val2){
    number1 = parseInt(val1);
    number2 = parseInt(val2);
   
    if (val1 == null || val2 == null) {
        return 0;
}

if (typeof (number1) == undefined && typeof (number2) == undefined) {            
return 0;
}

if (number1 == undefined && number2 == undefined) {            
return 0;
}

if(typeof(number1)==NaN && typeof(number2)==NaN){
return 0;
}

if (typeof (number1) != NaN && typeof (number2) != NaN) {
addition=sum.summation(number1,number2)
return addition;
}

return 0;
    }
}