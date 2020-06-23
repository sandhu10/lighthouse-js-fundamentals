function range(start, end, step){
  let begin = start;
  const add = step;
  const stop = end;
  let myArray = [];
  
  if(typeof begin == 'undefined' || typeof stop == 'undefined' || typeof add == 'undefined'){
    return myArray;
  }
  else if(begin > stop){
     return myArray;
  }
  else if(add <= 0){
    return myArray;
  }
  else{
    while(begin <= stop){
      myArray.push(begin);
      begin += add;
    }
  return myArray;
  }  
}

console.log("Array: " + range(4, 8, 1));