let counternumber = document.getElementById("CounterValue");
let incrementbutton = document.getElementById("Increment");
let decrementbutton = document.getElementById("Decrement");
let resetbutton = document.getElementById("Reset");
let count = 0;

incrementbutton.addEventListener("click",function(){
    count += 1;
    counternumber.textContent = count;
});

decrementbutton.addEventListener("click", function(){
    count -= 1;
    counternumber.textContent = count;
});


resetbutton.addEventListener("click",function(){
    count = 0;
    counternumber.textContent = count;
})
