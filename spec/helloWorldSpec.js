/* describe("Calculator", function () {  
    it("should add two numbers together", function () {
        expect(add(1, 2)).toBe(3);
    });

    it("should subtract two numbers", function () {
        expect(subtract(3, 2)).toBe(1);
        expect(subtract(-10, -1)).toBe(-9);
    });

    it("should multiply correctly", function () {
        expect(multiply(2, 3)).toBe(6);
    });

    it("should divide correctly", function () {
        expect(divide(10, 5)).toBe(2);
    });

    it("should return 0 when dividing by 0", function () {
        expect(divide(1, 0)).toBe(0);
    });
});
*/

describe("Test Case for Get Primes", function(){

	it("should get prime numbers between 1 and 10", function(){
		expect(getPrimes(10)).toEqual([2,3,5,7]);
	});
	it("should get prime numbers between 1 and 20", function(){
		expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
	});
	it("should contain this prime numbers", function(){
		expect(getPrimes(5)).toEqual([2,3]);
	});
	it("should check if array is empty", function(){
		expect(getPrimes()).toBeDefined()
	});
	it("should check if parameter is int", function(){
		expect(getPrimes('str')).toBeDefined();
	});
	it("should test function isPrime with prime numbers", function(){
		expect(isPrimeNumber(7)).toBeTruthy()
	});
	it("should test function isPrime with prime numbers", function(){
		expect(isPrimeNumber(11)).toBeTruthy()
	});
	it("should test function isPrime with prime numbers", function(){
		expect(isPrimeNumber(8)).toBeFalsy();
	});
	it("should test function isPrime with prime numbers", function(){
		expect(isPrimeNumber(12)).toBeFalsy();
	});
	it("should test function isPrime with prime numbers", function(){
		expect(isPrimeNumber(64)).toBeFalsy();
	});

});
