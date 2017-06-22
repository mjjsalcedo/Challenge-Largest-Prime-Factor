exports.largestPrimeFactor = function(n){
var primeNumber = 0;

  // do your work here
  for ( let i = 2; i <= Math.sqrt(n); i++){
    if ( n % i === 0 && isPrime(i)){
      primeNumber = i;
    }
  }
  return primeNumber;
};

  function isPrime(n){
    for( let i = 2; i < Math.sqrt(n); i++){
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
