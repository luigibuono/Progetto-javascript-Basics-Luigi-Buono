let add = document.getElementById ('incrementa');
let remove = documenti.getElementById('decrementa');
let reset = document.getElementById('resetta');
let numero = document.getElementById('counter')

let numero = 0;

add.addEventListener('click',function(){

                     numero +=1;
                     int.innerHTML = numero;});

remove.addEventListener('click', function(){
    numero -=1;
    int.innerHTML=numero;
})


reset.addEventListener('click', function(){
    numero = 0;
    int.innerHTML = numero;
})
                     
