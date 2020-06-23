function lastIndexOf(array, value){
  const myArray = array;
  const num = value;
  let position = -1;
  for(let i = 0; i < myArray.length; i++){
    if(myArray[i] === num){
      position = i;
    } 
  }
  return position;
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
