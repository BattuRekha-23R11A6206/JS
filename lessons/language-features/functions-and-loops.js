function name(params) {

}

let add = function(a,b){
console.log("Function Expression");
}

//arrow function

let Add = ()=>{
    Add(2,3);
}

//arrow function with parameters

let ADD = (a,b)=>{
    console.log(a+b);
}

//arrow fun also called short hand function, because it has a shorter syntax than function expression
let mul = (a,b)=> a*b;


// Hosting,td,closure 

for(let i = 0; i < 10; i++){
    console.log(i);
    i = 20;

    //prints only 0, because after first iteration, i is set to 20, and the loop condition fails
}

for(let i = 0; i < 10; i++) {
    console.log(i);
    i += 2;
    //output is like 0,3,6,9, because after each iteration, i is incremented by 2, and then the loop increments it by 1 more
}

for(let i = 0; i < 10; i--) {
    console.log(i);
    i += 2;
    //output is like 0,1,2,3,4,5,6,7,8,9 because after each iteration, i is incremented by 2 and then decremented by 1 in the loop condition
}

//for-off - mostly used for arrays and strings, it iterates over the values of an iterable object
for(let name of rekha){
    console.log(name);
}

//for-in
for(let index in fruits){
    console.log(index);
}

//forEach method executes a provided function once for each array element.
fruits.forEach(function(fruit,index){
    console.log(index,fruit);
});
