alert('Se le solicitara 5 valores y se iran sumando');
let aux0 = 0;
let i = 0;
while (i < 5) { /* Pedira 5 numeros y los ira sumando SALIDA POR CONSOLA */
    let num0 = prompt('Ingreso un numero:  ');
    if (!isNaN(num0)) {
        aux0 = aux0 + Number.parseInt(num0);
    }
    else {
        console.log('Valor Ingresado no es un numero');
    }
    alert(`La Suma es: ${aux0}`);
    i += 1;
}

alert('Se le solicitara que ingrese un texto y se iran concatenando para terminar digite ESC');
let j = prompt('Ingreso un texto:  ');
let aux1 = '';
while (j != 'ESC') { /* Pedira 5 numeros y los ira sumando SALIDA POR CONSOLA */
    aux1 = aux1 + j;
    alert(aux1);
    j = prompt('Ingreso un texto:  ');
}

alert('Ingrese la cantidad de veces que aparecera HOLA impreso');
let num0 = prompt('Ingrese un numero:  ');
for (var index = Number.parseInt(num0); index > 0; index--) {
    alert(`Quedan ${index} HOLA`)    
}





