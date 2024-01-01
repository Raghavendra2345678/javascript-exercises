const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(array) {
	return array.reduce((total, current) => total+current,0 );
};

const multiply = function(array) {
  return array.reduce((total, current) => total*current, 1);
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let fact = 1;
  if(n===0) return 1;
  else{
    for (var i=1;i<=n;i++){
      fact *= i;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
