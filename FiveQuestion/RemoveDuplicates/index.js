// Approach1
function removedup1(arr) {
  return [...new Set(arr)];
}
let arr1 = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
let ans1 = removedup1(arr1);

console.log(ans1);

// Output: [1, 2, 3, 6, 4, 7, 8, 5, 9, 0]
// time complexity of removedup1 is O(n).
// the space complexity of removedup1 is O(n) in the worst case

// <-------------------------------------------->


// Appoach2

function removedup2(arr) {
  return arr.filter((ele, index) => arr.indexOf(ele) === index);
}

let arr2 = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];
let ans2 = removedup2(arr2);

console.log("ans", ans);
// Output: [1, 2, 3, 6, 4, 7, 8, 5, 9, 0]

//  time complexity of removedup2 is O(n^2) 
// the space complexity of removedup2 is O(n) in the worst case.
