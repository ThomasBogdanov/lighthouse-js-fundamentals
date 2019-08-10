const howManyHundreds = function(num){
  let remainder = num % 100;
  let final = (num - remainder) / 100
  if (final > 0){
    return final;
  } else {
    return 0;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);