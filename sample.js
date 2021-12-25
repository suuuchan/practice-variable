const createArr = (sum) => {
  const arr = [];
  for (let i=1; i<=6; i++) {
    for (let j=1; j<=6; j++) {
      for (let k=1; k<=6; k++) {
        if ((i + j + k) === sum) {
          arr.push([i, j, k]);
        }
      }
    }
  }
  return arr;
};


console.log(createArr(6));


console.log(createArr(10));