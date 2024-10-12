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

// recursion ver.
// inspired by catalina!
const reverseZigZagString1 = (str) => {
  // setup recursion
  let splitStr = str.split(' ');
  if (splitStr.length > 1) {
    return reverseZigZagString1(splitStr[0]) + ' ' + reverseZigZagString1(splitStr.slice(1).join(' '));
  }

  // reverse and alternate
  let toLower = true;
  let res = '';
  for (let i = str.length-1; i >= 0; i--) {
    (toLower) ? res += str[i].toLowerCase() : res += str[i].toUpperCase();
    toLower = !toLower;
  }

  return res;
}


console.log(reverseZigZagString1("hello")) //"oOlLeH"
console.log(reverseZigZagString1("Fellows"))    //"sWoLlEf"
console.log(reverseZigZagString1("Code Challenge"))  //"eGnElLaHc EdOc"
console.log(reverseZigZagString1("i am"))  //"eGnElLaHc EdOc"
console.log(reverseZigZagString1("am i"))  //"eGnElLaHc EdOc"
console.log(reverseZigZagString1("yes yes"))  //"eGnElLaHc EdOc"

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