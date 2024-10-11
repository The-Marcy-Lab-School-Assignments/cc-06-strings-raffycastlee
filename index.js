//write your code here

const reverseString = (str) => {
  res = "";

  for (let i = str.length-1; i >= 0; i--) {
    res += str[i];
  }

  return res
}

// console.log(reverseString("hello"))  //"olleh"
// console.log(reverseString("oo"))     //"oo"
// console.log(reverseString(""))       //""

const reverseZigZagString = (str) => {
  // setup:
  // `res` to build up
  // `small` to alternate properly when string length is even
  res = "";
  let small = true;
  for (let i = str.length-1; i >= 0; i--) {
    // account for spaces
    if (str[i] == ' ') {
      res += str[i];
      continue;
    }
    // alternate chars
    (small) ? res += str[i].toLowerCase() : res += str[i].toUpperCase();
    small = !small;
  }

  return res;
}

// console.log(reverseZigZagString("hello")) //"oOlLeH"
// console.log(reverseZigZagString("Fellows"))    //"sWoLlEf"
// console.log(reverseZigZagString("Code Challenge"))  //"eGnElLaHc EdOc"