function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime
  if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3
  
  // Check divisors up to the square root of the number
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function prime(num) {
  const primes = []
  let c = 2
  while(c <= num){
    if(isPrime(c)){
      primes.push(c)
    }
  c++
  }
return primes
}