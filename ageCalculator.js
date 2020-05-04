const ageCalculator = function(name, yearOfBirth, currentYear){
  const age = currentYear - yearOfBirth;
  let message = name + " is " + age + " years old.";
  return message;
}

console.log(ageCalculator("Suzie", 1983, 2015));