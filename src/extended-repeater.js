module.exports = function repeater(str, options) {
    // console.log("---------------------------");
    // console.log("строка   " + str);
    // console.log("повторить   " + options.repeatTimes);
    // console.log("разделить  " + options.separator);
    // console.log("                        ");
    // console.log("добавка   " + options.addition);
    // console.log("разделить   " + options.additionSeparator);
    // console.log("повторить   " + options.additionRepeatTimes);

    str = String(str);
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
    let separator = options.separator ? options.separator : "+";
    
    let addition = String(options.addition);
    let additionSeparator;
    let additionRepeatTimes;
    if(addition != "undefined"){
        additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
        additionSeparator = options.additionSeparator ? options.additionSeparator : "|";
    }
    else{
        addition = "";
        additionRepeatTimes = 0;
        additionSeparator = "";
    }

    let resultAddition = addition;
    for(let i = 0; i < additionRepeatTimes - 1; i++){
        resultAddition += additionSeparator + addition;
    }
    
    str += resultAddition;
    let resultStr = str;
    for(let i = 0; i < repeatTimes - 1; i++){
        resultStr += separator + str;
    }
    return resultStr;
};
  