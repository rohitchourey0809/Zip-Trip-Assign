// Approach1
function reversestr1(str) {
  return str.split("").reverse().join("");
}

let str1 = "Bhaskara";
console.log(reversestr1(str1));

// Output: "araksahB"
// the overall time complexity of reversestr1 is O(n)
// the space complexity of reversestr1 is O(n)
// <---------------------------------->
// Approach2
function reversestr2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

let str2 = "Bhaskara";
console.log(reversestr2(str2)); // Output: "araksahB"

//  the time complexity of reversestr2 is O(n),
//  the space complexity is O(n)
