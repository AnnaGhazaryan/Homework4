//Exercise 3

function isOdd(num)  {
  if (Math.abs(num) == 0) return (console.log("False"));
  else if (Math.abs(num) == 1) return (console.log("True"));
  else return isOdd(Math.abs(num) - 2);
}

isOdd(112);
