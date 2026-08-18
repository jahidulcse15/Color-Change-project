
const body=document.querySelector('#body');

console.log(body);

const li=document.getElementsByTagName('li');
var arrylist=Array.from(li);
console.log(li);

arrylist.forEach(function(i){
    var color="";
    i.addEventListener("click",function(){
        if(i.className=="red"){
            color="Red";
            body.style.backgroundColor="red";
        }
        else if(i.className=="blue"){
            color="Blue";
            body.style.backgroundColor="blue";
        }
        else if(i.className=="pink"){
            color="Pink";
            body.style.backgroundColor="pink";
        }
        else if(i.className=="green"){
            color="Green";
            body.style.backgroundColor="green";
        }
        else{
            body.style.backgroundColor="white";
        }
        i.textContent=color;
    });
})

// var red=document.querySelector('.red');

// red.addEventListener('click',function(){
//     body.style.backgroundColor="red";
// })

// var blue=document.querySelector('.blue');

// blue.addEventListener('click',function(){
//     body.style.backgroundColor="blue";
// })

// var green=document.querySelector(".green");
// green.addEventListener("click",function(){
//     body.style.backgroundColor="green";
// })

// var pink=document.querySelector(".pink");
// pink.addEventListener("click",function(){
//     body.style.backgroundColor="pink";
// })