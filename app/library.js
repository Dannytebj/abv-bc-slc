function isPrimeNumber(number) {
  //this function checks for prime numbers
  let isPrime = true;
  Array.apply(null, Array(number)).forEach((_, index) => {
    const currentNumber = index + 2;
    if (number % currentNumber == 0 && currentNumber > 1 && currentNumber < number) {
      isPrime = false;
    }
  });
  return isPrime;
}

function getPrimes(n) {
  //this function gets all prime numbers within n by checking against isPrimeNumber
   if (!Number.isInteger(n)) {
    return [];
  }
  return Array.apply(null, Array(n)).map((_, index) => {
    const currentNumber = index + 2;
    if (currentNumber < n && isPrimeNumber(currentNumber)) {
      return currentNumber;
    }
    return 0;
  }).filter((i) => { return i != 0; });
}