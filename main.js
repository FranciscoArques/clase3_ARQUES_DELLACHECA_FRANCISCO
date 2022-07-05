
alert ("¡Hola! Esta es una aproximadora diseñada para insertar un número entero y... 1° - Identificar si el número ingresado es PAR o no. 2° - En función al número ingresado se visualizarán los números PARES más cercanos al mismo (5 números para atrás y 5 números para adelante).");

document.write(" ---- RESULTADOS ---- ");

let numeroIngresado = parseInt(prompt("Ingrese Algún Número"));
let x = numeroIngresado - 4;
let y = numeroIngresado + 4;

document.write("Usted Ingresó el Número: " + numeroIngresado + " ---- ");

if (numeroIngresado%2 === 0){
    document.write("El número que Usted ingresó es PAR --- ");
    
    for (let i = numeroIngresado; i >= x ; i +=2){
        alert("Números Pares Más Próximos: " + (i - 4));
        document.write("Números Pares Más Próximos: " + (i-4) + " --- ");

        if (i >= y+4){
            break;
        }
    }

}else {
    let i = parseInt(numeroIngresado);
    document.write("Los números PARES más GRANDES y cercanos son: " + (i + 1) + " y " + (i + 3) +" ---- ");
    document.write("Los números PARES más CHICOS y cercanos son: " + (i - 1) + " y " + (i - 3) + " ---- ");
};


