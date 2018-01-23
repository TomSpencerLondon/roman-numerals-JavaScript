'use strict';

var romanNumerals = require('../src/romanNumerals');

describe('RomanNumerals()', function() {

  it('should be able to convert 1 to I', function(){
    expect(romanNumerals.convert(1)).toEqual("I");
  });

  it('should be able to convert 5 to V', function(){
    expect(romanNumerals.convert(5)).toEqual("V");
  });

});
