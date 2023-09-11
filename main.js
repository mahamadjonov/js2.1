let ism = document.querySelector(".name")
let count = document.querySelector(".count")
let btn = document.querySelector("#btn")
let elcreate = document.querySelector("#createEl")
let elbox = document.querySelector("#box")


let b = 1;

btn.addEventListener('click',function(){
    b++;
    count.innerHTML = b;
})

elcreate.addEventListener("click",function(){
    let h3 = document.createElement("h3")
    elbox.appendChild(h3)
    h3.innerHTML = "sardor,ali,xilolidin"
    h3++;
    count.innerHTML=h3;
})


