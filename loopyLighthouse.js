const loopyLighthouse = function(range, multiple, words){
  const number = range;
  const digit = multiple;
  const word = words;
  const concat = word[0] + word[1];
  for(let i = number[0]; i <= number[1]; i++){
    if(i % digit[0] === 0 && i % digit[1] === 0){
      console.log(concat);
    }
    else if(i % digit[0] === 0){
      console.log(word[0]);
    }
    else if(i % digit[1] === 0){
      console.log(word[1]);
    }
    else{
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
