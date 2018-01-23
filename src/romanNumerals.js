'use strict';

var romanNumerals = function () {

  var convert = function (number) {
    if(number == 1){
      return "I";
    }else if(number == 5){
      return "V";
    }
  };

  return {
    convert: convert
  };
};

module.exports = romanNumerals();
