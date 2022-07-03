// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript
// =========================================================

// 1) Fix the code to get the largest of three.

// let f,s,t; this line was creating an error because the variables where already being used as arguments

// Fixed Code
/* aa = (f, s, t) => {
  // let f,s,t;
  console.log("Input", f, s, t);
  if (f > s && f > t) {
    console.log("Output", f);
  } else if (s > f && s > t) {
    console.log("Output", s);
  } else {
    console.log("Output", t);
  }
};
aa(1, 2, 3);

*/

// 2) Fix the code to Sum of the digits present in the number

// Had to convert the given digits to string so the function can loop through the digits. The individual digit was converted again to calculate the sum

/* let n = 123;
console.log("Input", n);
console.log("Output", add(n));

function add(n) {
  let sum = 0;
  const conv = n.toString();
  for (var i = 0; i < conv.length; i++) {
    sum += parseInt(conv[i]);
  }
  return sum;
} */

// Fix the code to Sum of all numbers using IIFE function
// for (var i = 0; i <= arr.length; i++); removed the semicolon and = to from this line to make the code run

// Fixed Code:
/*
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
})();
*/

// Fix the code to gen Title caps.

// function argument was missing

// Code:

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function (arro) {
//   for (var i = 0; i <= arro.length; i++) {
//     console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//   }
// };
// ano(arr);

// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const sum = (a, b) => a + b;
// const sum2 = num.reduce(sum);
// console.log(sum2);

// Fix the code to sum the number in that array

// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const sum = (a, b) => a + b;
// const sum2 = num.reduce(sum);
// console.log(sum2);

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function () {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       console.log(arr[i]);
//     }
//   }
// })();

// (function (str) {
//   str = str.split("").reverse().join("");
//   console.log(str);
// })("abcd");
