assert=require('chai').assert;

sum=require('../main/Sum_Controller.js');

describe('Test cases for summation',function(){
    it('addition of 1 and 1 numbers should return 2',function(){
        assert.equal(2,sum.summation(1,1));
    }),
    it('given numbers are 1 and undefined should return zero',function(){
            assert.equal(0,sum.summation(1,))       
    }),
    it('given numbers are null and 1 should return null',function(){
        assert.equal(0,sum.summation(null,1))
    }),
    it('given empty parameters should return zero',function(){
        assert.equal(0,sum.summation())
    }),
    it('given zero values should return zero',function(){
        assert.equal(0,sum.summation(0,0))
    }),
    it('given string value and number should return zero',function(){
        assert.isNaN(sum.summation("number",0))
    }),
    it('given one number in string and another number in number should return in number ',function(){
        assert.equal(10,sum.summation("9",1))
    })
});