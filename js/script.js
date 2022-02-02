function insert(num){
    const numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

function clearAll(){
    var erase = document.getElementById('display').innerHTML = '';
}

function backOne(){
    const numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero.substring(0, numero.length - 1);
}

function calcular(){
    const numero = document.getElementById('display').innerHTML;
        if(numero){
            document.getElementById('display').innerHTML = eval(numero);
        }else{
            document.getElementById('display').innerHTML = null;
        }
}