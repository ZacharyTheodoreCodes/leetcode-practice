function repeatStringNumTimes(str, num) {
    let output = ""
  for ( let i = 0 ; i < num ; i ++) {
    output += str
  }
  return output
}

console.log(repeatStringNumTimes("abc", 3));
