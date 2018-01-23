'use strict';

var romanNumerals = require('../src/romanNumerals');

describe('RomanNumerals()', function() {

  beforeEach(function () {
    romanNumerals = new romanNumerals();
  })

  it('should be able to convert 1 to I', function(){
    expect(romanNumerals.convert(1)).toEqual("I");
  });

});
