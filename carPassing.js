const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

const carPassing = function(cars, speed){
  const motors = cars;
  const velocity = speed;
  const clock = Date.now();
  
  const obj = {};
  obj["time"] = clock;
  obj["speed"] = velocity;
 
  motors.push(obj);

  return motors;
  
}

//calling function
carPassing(cars, speed);