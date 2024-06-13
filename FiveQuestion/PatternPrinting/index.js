// Question 1.
// Given that you are using JavaScript.
// Write a function that takes n as input.
// And prints the following pattern.
// 1
// 21
// 321
// 4321
// ...
// nnnnn(n times)


// Approach1
function printPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j;
    }
    console.log(row);
  }
}
printPattern1(5);


// <----------------------------------------------------------------------->
// Approach2
function printPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = j + row;
    }
    console.log(row);
  }
}
printPattern2(5);



