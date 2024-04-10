function ejercicio1(){
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
        
    }
}
function ejercicio2() {
   let valores = [true, 5, false, "hola", "adios",2];
        if (valores[3].length < valores[4].length){
            console.log(valores[0]);
            console.log("adios es mayor que hola.");
        }else{
            console.log(valores[2]);
            console.log("No se cumple la consigna.");

        }
            console.log(valores[1] + valores[5])
            console.log(valores[1] - valores[5])
            console.log(valores[1] * valores[5])
            console.log(valores[1] / valores[5])
}
function ejercicio3(){
    var numero1= 5;
    var numero2= 8;
    if(numero1<numero2) {
        console.log("numero1 no es mayor que numero2");
        }
        if(numero2>0) {
        console.log("numero2 es positivo");
        }
        if(numero1 <0) {
        console.log("numero1 es negativo o distinto de cero");
        }
        if(numero1 +1 <numero2) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }
}
function ejercicio4(){
    var DNI=prompt("el mensaje");
    var pos= DNI%23;
    let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

    if(pos>0 && pos<99999999){
        var letrauser=prompt("ingrese letra de su DNI");
        var letra = letrasDNI[letrauser];

        if(letra == letrauser){
            console.log("Las letras son iguales.");
        } 
        else{
            console.log("LA letra introducida es incorrecta.")
        }
        console.log("El numero introducido es valido.");
        console.log("La letra de tu DNI es: "+ letra);
  }
    else{
        console.log("El numero introducido NO es valido");
    }

}
function ejercicio5(){
    var factorial= prompt("Ingrese un número para hallar su factorial.");

    let pro = 1;
    for (let i = 1; i <= factorial; i++) {
       pro = pro *i
    }
    console.log("El factorial es: "+ pro);
}
function ejercicio6(){
    
    var numero= prompt("Ingrese un número para determinar si es par o impar.");
    var resto= numero%2;

    if(resto == 0){
        console.log("El número es par");
    }
    else if(numero==0){
        console.log("El número introducido es invalido.");
    }

    else{
        console.log("El numero es impar");
    }

}
function ejercicio7(){
   
    let txt = prompt("Ingrese texto.");

    let result = mayumin(txt);

    console.log(result);

}

function mayumin(txt) {
    let may = 0;
    let min = 0;

for (let i = 0; i < txt.length; i++) {
    if (txt.charAt(i) === txt.charAt(i).toUpperCase()) {
        may++;
    } else if (txt.charAt(i) === txt.charAt(i).toLowerCase()) {
        min++;
    }

}
    if(may==0){
        return("El texto sólo contiene minúsculas.");

    }
    else if(min==0){
        return("El texto sólo contiene mayúsculas");
    }
    else{
        return("El texto contiene mayúsculas y minúsculas.");
    }
}
function ejercicio8(){
    var txt= prompt("Ingrese una palabra u oración para determinar si es palíndromo o no.");
    
    var result=(espalindromo(txt));

    alert(result);
}
function espalindromo(txt){
    
    var texto= txt.toLowerCase().replace(/[^a-z]/g, '');

    var invertir= texto.split('').reverse().join('');

    if(txt==invertir){
        return "Es palíndromo."
    }  else{
        return "No es palíndromo."
    }
}
function lanzarDados() {
    // Función para simular el lanzamiento de un dado
    function lanzarDado() {
        return Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6
    }

    // Array para almacenar el número de apariciones de cada suma
    let conteoSumas = new Array(11).fill(0); // Índices de 0 a 11 representan sumas de 2 a 12

    // Realizar 36,000 lanzamientos y contar las sumas
    for (let i = 0; i < 36000; i++) {
        let suma = lanzarDado() + lanzarDado();
        conteoSumas[suma - 2]++; // Restamos 2 para ajustar el índice del array
    }

    // Imprimir resultados
    console.log("Resultado del conteo de las sumas de los dados:");
    for (let i = 0; i < conteoSumas.length; i++) {
        console.log(`Suma ${i + 2}: ${conteoSumas[i]} veces`);
    }
}