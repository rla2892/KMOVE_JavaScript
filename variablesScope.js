let varFirst = 1;
console.log(varFirst);

{
    var varSecond = 2;
    console.log(varSecond);    
}

console.log(varSecond);

{
    let varThird = 3;
    console.log("Third - first : "+varThird);
}
console.log("next");
{
    let varThird = 4;
    console.log("Third - second : " +varThird);
    {
        console.log("Third - Thid : " + varThird )
        
    }
    console.log("Third - Fourth : " +varThird);
}
console.log("end");



// function 