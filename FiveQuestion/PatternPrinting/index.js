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
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j;
    }
    console.log(row);
  }
}
pattern1(5);


//  the time complexity of pattern1 is O(n^2).
//  the space complexity of pattern1 is O(n^2) 

// <----------------------------------------------------------------------->
// Approach2
function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = j + row;
    }
    console.log(row);
  }
}
pattern1(5);

//  the time complexity of pattern2 is O(n^2).
// the space complexity of pattern2 is also O(n^2) in the worst case.



