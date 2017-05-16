describe("Test Case for Get Primes", function(){
	describe("get primes function should", function(){
		it("should get prime numbers between 1 and 10", function(){
			expect(getPrimes(10).to.equal(2,3,5,7));
		});
		it("should check if array is empty", function(){
			expect(getPrimes().toBeDefined())
		});
		it("should check if parameter is int", function(){
			expect(getPrimes('str').toBeDefined())
		})
		it("should test if array is null", function(){
			expect(getPrimes(null).toBeNull() )
		});
		it("should test function isPrime", function(){
			expect(isPrimeNumber(7).toBeTruthy())
		});
		it("should test function isPrime for not prime numbers", function(){
			expect(isPrimeNumber(8).toBeFalsy())
		})

	});
});
