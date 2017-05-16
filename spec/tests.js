const myApp = require(../app/library.js)

describe("Test Case for Get Primes", function(){
		it("should get prime numbers between 1 and 10", function(){
			expect(myApp.getPrimes(10)).toEqual(2,3,5,7));
		});
		it("should check if array is empty", function(){
			expect(myApp.getPrimes()).toBeDefined())
		});
		it("should check if parameter is int", function(){
			expect(myApp.getPrimes('str').toBeDefined())
		});
		it("should test if array is null", function(){
			expect(myApp.getPrimes(null).toBeNull() )
		});
		it("should test function isPrime", function(){
			expect(myApp.isPrimeNumber(7).toBeTruthy())
		});
		it("should test function isPrime for not prime numbers", function(){
			expect(myApp.isPrimeNumber(8).toBeFalsy())
		});
});
