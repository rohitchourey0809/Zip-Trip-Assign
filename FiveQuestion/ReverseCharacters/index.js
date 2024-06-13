// Approach1
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Bhaskara"));
// Output: "araksahB"








// <---------------------------------->
// Approach2
function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString2("Bhaskara")); // Output: "araksahB"
