//1
function areBothSame(x, y){
  if (x == y) {return true;}
  else {return false;}
}

//2
function areBothEqual(x, y){
  if (x === y) {return true;}
  else {return false;}
  
}

//3
function areAllFourEqual(a, b, c, d){
    if (a == b && b == c && c == d) {return true;
    }
else {return false;}
  
}


//4
function areAllFourSame(a, b, c, d){
    if (a === b && b === c && c === d) {return true;
} else {return false;}
}

//5
function areAllFourSameOrEqual(a, b, c, d){
    if (a === b && b === c && c === d) {return 'equal';}
 else if ( a == b && b == c && c == d) {return 'same';}
  else {return null;}
}


console.log (areBothSame(2, 4));
console.log (areBothEqual(2, 6));
console.log (areAllFourEqual(-4, 'four', 'ninety', 9));
console.log (areAllFourSame(4, '4', 'four', 4));
console.log (areAllFourSameOrEqual(4, '4', 'four', 4));


