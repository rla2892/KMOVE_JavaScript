let count = 0;

// while(true){
// let condition = count < 100;
while(count < 10) {
    count = count + 1;
    console.log('in while ' + count);
}

console.log("end");

for(let i = 0; i < 10; i++) {
    console.log("in for with count : "+ i);
}

let fruits = ["appple", "banana", "orange"];
for(let index=0; index<2; index++){
    console.log("fr : " + fruits[index]);
}

let mix = ["appple", 1, "banana", ["tiger", "lion"],"orange"];
for(let item of mix){
    console.log(item);

    if( typeof item != 'string' 
    && typeof item != 'number'  
    && typeof item != 'boolean'){
        for(let anim in item){
            console.log(item[anim]);
        }
    }

}

let animals = ["tiger", "lion"];
for(let anim of animals){
    console.log(anim);
}