let cond = false;
cond = 30 > 6

let n1 = 30;
let n2 = 6;
cond = n1 > n2;
let cond_2 = n1 <= n2;
cond = cond || cond_2;

if (cond) {
    console.log("In if state");
}

if (!cond) {
    console.log("Not in if state");
}

let score = 50;
if(score >= 90){
    console.log("good");
}else if(score >= 50){
    console.log("soso");
}else{
    console.log("bad");
}