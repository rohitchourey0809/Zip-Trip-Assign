// Approach1
function removeDuplicates1(arr) {
  return [...new Set(arr)];
}

console.log(
  removeDuplicates1([1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1])
);
// Output: [1, 2, 3, 6, 4, 7, 8, 5, 9, 0]

// <-------------------------------------------->
// Appoach2
function removeDuplicate2(arr) {
  return arr.filter((ele, index) => arr.indexOf(ele) === index);
}

let ans = removeDuplicate2([1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1]);

console.log("ans", ans);
// Output: [1, 2, 3, 6, 4, 7, 8, 5, 9, 0]
