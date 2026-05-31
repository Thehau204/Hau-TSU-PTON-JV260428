function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let primes = [];
let num = 2;

while (primes.length < 20) {
  if (isPrime(num)) primes.push(num);
  num++;
}

console.log(primes);
