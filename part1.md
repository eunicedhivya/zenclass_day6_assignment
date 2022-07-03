# Part 3

### 1)Fix the code

mismatched quotes around the string
Fixed Code

```
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>

```

### 2) Fix the code

Had to add let key word for lname and concatenate space between strings to get out put

Fixed Code

```
let admin = 9;
let fname = 10.5;
fname = "Guvi";
let lname = "geek";
admin = fname + " " + lname;
alert(admin); // "Guvi geek"

```

### 3) Fix the code

added space between strings and changed quotes to backticks for template literal to work

Fixed Code

```
let fname = 10.5;
fname = "Guvi";
let lname = "geek";
let name = fname + " " + lname;
alert(`hello ${name}`);

```

### 4) Fix the code

The input from prompts are strings so converted those to numbers so sum operation can be performed

Fixed Code

```
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));

```

### 5) Fix the code

parsing the value from string to number

```
let value = prompt("How many runs you scored in this ball");
if (parseInt(value) === 4) {
  console.log("You hit a Four");
} else if (parseInt(value) === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

```

### 5) Fix the code

```
let i = 4;
while (i > 1) {
  console.log(--i);
}
```

### 6) Fix the code

increment by 2 to render only even numbers

```
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}
```

### 7) Fix the code

Removed quotes from template literla and changed the quotes to backticks. Also changed the count to gift.length

```
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < gifts.length; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
```
