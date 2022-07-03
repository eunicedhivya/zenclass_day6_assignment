# Part 3

### 1)Fix the code to get the largest of three.

let f,s,t; this line was creating an error because the variables where already being used as arguments

Fixed Code

```
aa = (f, s, t) => {
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

```

### 2) ix the code to Sum of the digits present in the number

Had to convert the given digits to string so the function can loop through the digits. The individual digit was converted again to calculate the sum

Fixed Code

```
let n = 123;
console.log("Input", n);
console.log("Output", add(n));

function add(n) {
  let sum = 0;
  const conv = n.toString();
  for (var i = 0; i < conv.length; i++) {
    sum += parseInt(conv[i]);
  }
  return sum;
}

```

### 3) Fix the code to gen Title caps.

function argument was missing

Fixed Code

```
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
  for (var i = 0; i <= arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
ano(arr);

```

### 4) Fix the code to sum the number in that array

const keyword doesnt allow use of same variable name again.

Fixed Code

```
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const sum2 = num.reduce(sum);
console.log(sum2);

```

### 5) print all odd numbers in an array using IIFE function

fixed code

```
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})();

```

### 6) Fix the code to reverse.

fixed code

```
(function (str) {
  str = str.split("").reverse().join("");
  console.log(str);
})("abcd");

```
