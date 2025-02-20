// Sum of Two Numbers
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
    return a + b;
  }
  
  // Factorial of a Number
  function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  // Find the Largest Number
  function grande(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(item => typeof item === 'number')) {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
    return Math.max(...arr);
  }
  
  // Count Vowels in a String
  function contarV(str) {
    if (typeof str !== 'string') {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
    const vocal = str.match(/[aeiouAEIOU]/g);
    return vocal ? vocal.length : 0;
  }
  
  // Check if a Number is Prime
  function Primo(n) {
    if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
      console.log("Los datos de entrada no son adecuados");
      return;
    }
    for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = {
    sum,
    factorial,
    grande,
    contarV,
    Primo,
  };
