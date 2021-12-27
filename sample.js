const generateBitList = (n) => {
  let array = []
  for (let i = 0; i < 1 << n; i++) {
      let bit = i.toString(2)
      while (bit.length < n) {
          bit = '0' + bit
      }
      array.push(bit)
  }
  return array
}

console.log(generateBitList(3))


console.log(createArr(10));