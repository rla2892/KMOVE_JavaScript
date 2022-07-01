false; // 0, null, NaN, undefined, ""
true; // 1

let flag = true; // 1
flag = false;

let cond = 20 > 1;
cond = 20 <= 5;

let cond_1 = 15 > 5;
let cond_2 = 15 < 7;

// ||, &&, !
let result = cond_1 || cond_2;
console.log(result);
result = cond_1 && cond_2;
console.log(result);
