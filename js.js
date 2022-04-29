let label=document.getElementById("metodologia")
let labelModelagem=document.getElementById("modelagem")
let labelTeste=document.getElementById("teste")    

let bnt=document.getElementById("bnt");


if (bnt.addEventListener('click',sorteiar)){
    sorteiar()
   
}

function sorteiar(){
    
    metodo()
    model()
    test()

    return
}

function metodo(){
    const metodologia=[
    "Prescritivo","Especializado","Desenvolvimento ágil"]

    elemento = metodologia[Math.floor(Math.random() * metodologia.length)];
    label.innerHTML=elemento;
}


function model(){
    const modelagem=[
    "UML estrutural","UML comportamental"]

    elemento = modelagem[Math.floor(Math.random() * modelagem.length)];
    labelModelagem.innerHTML=elemento;
}
function test(){
    const testes=[
    "Caixa Preta","Caixa Branca"]

    elemento = testes[Math.floor(Math.random() * testes.length)];
    labelTeste.innerHTML=elemento;
}
