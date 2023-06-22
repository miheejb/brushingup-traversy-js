// if the nubmer is devisable by three return fizz
//if the nubmer is devisible by five return Buzz
//if the nubmer is devisible by three and five ... return fizzBuzz
// if the number is not divisible by 3 or 5 => input
//No a number => 'Not a number'

const input = fizzBuzz(7);
console.log (input);

function fizzBuzz(number) {
  if (typeof number !== 'number') return 'NaN';

  if (number % 3 === 0 && number / 5 === 0) return 'FizzBuzz';

  if (number % 3 ===0) return 'Fizz';

  if (number % 5 === 0) return 'Buzz';

  return number
  
}
