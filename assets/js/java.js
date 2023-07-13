

let add = document.getElementById('increase');
let remove = document.getElementById('decrease');
let reset =document.getElementById('reset');
let int = document.getElementById('counter');

let integer = 0;

add.addEventListener('click', function(){

    integer +=1;
    int.innerHTML = integer;

});

remove.addEventListener('click', function(){
    integer -=1;
    int.innerHTML=integer;
})

reset.addEventListener('click', function(){
    integer = 0;
    int.innerHTML = integer;
})      
