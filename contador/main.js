//variables contador nosotros
const contador  = document.getElementById("contar","contar2");
const sumar  = document.getElementById("incr","incr2");
const restar  = document.getElementById("decr","decr2");
const reset  = document.getElementById("reset","reset2");

//variables contador ellos
const contador2  = document.getElementById("contar2");
const sumar2  = document.getElementById("incr2");
const restar2  = document.getElementById("decr2");
const reset2  = document.getElementById("reset2");


// inicio contador nosotros 

let numeroN = 0;

sumar.addEventListener("click", ()=>{
    numeroN++;
    contador.innerHTML = numeroN;
})

restar.addEventListener("click", ()=>{
    if(numeroN == 0){}
    else{
        numeroN--;
        contador.innerHTML = numeroN
    }

});

reset.addEventListener("click", ()=>{
    numeroN = 0;
    contador.innerHTML = numeroN;
})

// fin contador nosotros


// inicio contador ellos

let numeroE = 0;

sumar2.addEventListener("click", ()=>{
    numeroE++;
    contador2.innerHTML = numeroE;
})

restar2.addEventListener("click", ()=>{
    if(numeroE == 0){}
    else{
        numeroE--;
        contador2.innerHTML = numeroE
    }

});

reset2.addEventListener("click", ()=>{
    numeroE = 0;
    contador2.innerHTML = numeroE;
})

// fin contador ellos