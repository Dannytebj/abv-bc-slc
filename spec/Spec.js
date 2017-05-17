myApp = require("../app/getPrimes.js");
('use strict');
describe("Test Case for Get Primes", function(){

	it("should get prime numbers between 1 and 10", function(){
		myApp.expect(getPrimes(10)).toEqual([2,3,5,7]);
	});
	it("should get prime numbers between 1 and 20", function(){
		myApp.expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
	});
	it("should contain this prime numbers", function(){
		myApp.expect(getPrimes(5)).toEqual([2,3]);
	});
	it("should check if array is empty", function(){
		myApp.expect(getPrimes()).toBeDefined()
	});
	it("should check if parameter is int", function(){
		myApp.expect(getPrimes('str')).toBeDefined();
	});
	it("should test function isPrime with prime numbers", function(){
		myApp.expect(isPrimeNumber(7)).toBeTruthy()
	});
	it("should test function isPrime with prime numbers", function(){
		myApp.expect(isPrimeNumber(11)).toBeTruthy()
	});
	it("should test function isPrime with prime numbers", function(){
		myApp.expect(isPrimeNumber(8)).toBeFalsy();
	});
	it("should test function isPrime with prime numbers", function(){
		myApp.expect(isPrimeNumber(12)).toBeFalsy();
	});
	it("should test function isPrime with prime numbers", function(){
		myApp.expect(isPrimeNumber(64)).toBeFalsy();
	});

});
