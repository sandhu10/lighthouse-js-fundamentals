const smartGarbage = function (trash, bins) {
  const name = trash;
  const newBin = bins;
  if(name === "waste"){
    newBin['waste'] += 1;
    return newBin;
  }
  else if(name === "recycling"){
    newBin['recycling'] += 1;
    return newBin;
  }
  else if(name === "compost"){
    newBin['compost'] += 1;
    return newBin;
  }
  else{
    return newBin;
  }
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

