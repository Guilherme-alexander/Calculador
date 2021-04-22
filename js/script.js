// controle 1
    function add1(){
        var valor1 = document.getElementById("txt1").value = 1;
        var valor1 = document.getElementById("txt2").value = 1;
    }
    function add2(){
        var valor1 = document.getElementById("txt1").value = 2;
        var valor1 = document.getElementById("txt2").value = 2;
    }
    function add3(){
        var valor1 = document.getElementById("txt1").value = 3;
        var valor1 = document.getElementById("txt2").value = 3;
    }
    function add4(){
        var valor1 = document.getElementById("txt1").value = 4;
        var valor1 = document.getElementById("txt2").value = 4;
    }
    function add5(){
        var valor1 = document.getElementById("txt1").value = 5;
        var valor1 = document.getElementById("txt2").value = 5;
    }
    function add6(){
        var valor1 = document.getElementById("txt1").value = 6;
        var valor1 = document.getElementById("txt2").value = 6;
    }
    function add7(){
        var valor1 = document.getElementById("txt1").value = 7;
        var valor1 = document.getElementById("txt2").value = 7;
    }
    function add8(){
        var valor1 = document.getElementById("txt1").value = 8;
        var valor1 = document.getElementById("txt2").value = 8;
    }
    function add9(){
        var valor1 = document.getElementById("txt1").value = 9;
        var valor1 = document.getElementById("txt2").value = 9;
    }

 // controle 2

 

function somar(){
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) + parseInt(valor2);
    res.innerHTML = `Resultado de <strong>${valor1}</strong> + <strong>${valor2}</strong> é: <strong>${resultado}</strong>`   
}

function subtrair(){
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) - parseInt(valor2);
    res.innerHTML = `Resultado de <strong>${valor1}</strong> - <strong>${valor2}</strong> é: <strong>${resultado}</strong>`   
}

function mutplicar(){
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) * parseInt(valor2);
    res.innerHTML = `Resultado de <strong>${valor1}</strong> X <strong>${valor2}</strong> é: <strong>${resultado}</strong>`   
}

function dividir(){
    var valor1 = document.getElementById("txt1").value;
    var valor2 = document.getElementById("txt2").value;
    var res = document.getElementById("res");
    var resultado = parseInt(valor1) / parseInt(valor2);
    res.innerHTML = `Resultado de <strong>${valor1}</strong> / <strong>${valor2}</strong> é: <strong>${resultado}</strong>`   
}