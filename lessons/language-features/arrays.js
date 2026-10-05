//arrays in js 

//js arrays are heterogeneous in nature, meaning they can hold different types of data in a single array.


let arr = [1,"apple",true,undefined,null,NaN,Infinity,{},[],function(){},Symbol("id")];

//console.log(arr);


//push method adds an element to the end of the array and returns the new length of the array.
//pop method removes the last element from the array and returns that element. This method changes the length of the array.
//shift method removes the first element from the array and returns that removed element. This method changes the length of the array.
//unshift method adds one or more elements to the beginning of the array and returns the new length of the array.

let fruits = ["apple","banana","orange"];

fruits.push("grape"); //output: ["apple","banana","orange","grape"]
//console.log(fruits);

fruits.pop(); //output: ["apple","banana","orange"]
//console.log(fruits);

fruits.shift(); //output: ["banana","orange"]
console.log(fruits);

fruits.unshift("kiwi"); //output: ["kiwi","banana","orange"]
console.log(fruits);

