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
  res = "";

  let small = true;
  for (let i = str.length-1; i >= 0; i--) {
    if (small) {
      res += str[i].toLowerCase();
      small = false;
    } else {
      res += str[i].toUpperCase();
      small = true;
    }
  }

  return res;
}

// console.log(reverseZigZagString("hello")) //"oOlLeH"
// console.log(reverseZigZagString("Fellows"))    //"sWoLlEf"
// console.log(reverseZigZagString("Code Challenge"))  //"eGnElLaHc EdOc"