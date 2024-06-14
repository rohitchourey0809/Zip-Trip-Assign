# Zip-Trip-Assign

```
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
```

```
//Question2
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

console.log("ans2", ans2);
// Output: [1, 2, 3, 6, 4, 7, 8, 5, 9, 0]

//  time complexity of removedup2 is O(n^2) 
// the space complexity of removedup2 is O(n) in the worst case.
```

```
//Question3
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

```


```
<!-- Question 4.
Consider the following HTML -->
<div id="container">
  <div class="box"></div>
  <!-- Line 2 -->
  <div class="box-2"></div>
  <!-- Line 3 -->
  <div>
    <!-- Line 4 -->
    <div class="box"></div>
    <!-- Line 5 -->
  </div>
</div>
<div class="box"></div>
<!-- Line 7 -->
<!-- 
 For each of the following selectors, write the line numbers of the elements that will be selected
.box
div .box
div.box
[class] -->
.box: Lines 2, 5, 7 
 div .box: Lines 5, 7
 div.box: Lines 2, 5, 7 
 [class]: Lines 2, 3, 5, 7 
 #container .box: Lines 2, 5 
 #container > .box: Line 2
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Boxes</title>
    <style>
      #container {
        display: flex;
        width: 100%;
      }

      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          height: 100px;
      }

      .left.fixed.box {
        width: 100px;
      
        background-color: lightblue;
      }

      .middle.expanding.box {
        flex-grow: 1;
        background-color: lightgreen;
        height: 100px;
      }

      .right.fixed.box {
        width: 100px;
        background-color: lightcoral;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div class="left fixed box">Left</div>
      <div class="middle expanding box">Middle</div>
      <div class="right fixed box">Right</div>
    </div>
  </body>
</html>
```










```
FrontendTodoRepo
https://github.com/rohitchourey0809/Zip-trip-frontend

```
Deployed link

https://zip-trip-frontend.vercel.app/

Home Page
![image](https://github.com/rohitchourey0809/Zip-Trip-Assign/assets/97465195/6e6431fb-b704-47e7-81f0-96ecc80869ae)


Details Page
![image](https://github.com/rohitchourey0809/Zip-Trip-Assign/assets/97465195/8f351cd9-9652-40e2-a91a-b89a7b723f54)


Edit Page
![image](https://github.com/rohitchourey0809/Zip-Trip-Assign/assets/97465195/166a4710-37d2-4d7e-8c69-1944249ae4c3)





```
BackendTodoRepo
https://github.com/rohitchourey0809/Backend-ziptrip

```
API Endpoints

```
GET /api/todos: Fetch all todos
```

```
GET /api/todos/:id: Fetch a single todo by ID
```

```
POST /api/todos: Create a new todo
```

```
PUT /api/todos/:id: Update a todo by ID
```

```
DELETE /api/todos/:id: Delete a todo by ID
```

## For frontend

`cd Todo-Task`
`cd Frontend`
`npm run start`

## For Backend

`cd Todo-Task`
`cd Backend`
`node index.js`


