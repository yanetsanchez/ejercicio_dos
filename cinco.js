/*
    5- Crear una función que reciba dos parámetros numéricos, luego los sume, calcule el promedio y luego devuelva como resultado el promedio. Mostrar mediante alert el resultado.
*/

function promNum(num1, num2) {
    suma = num1 + num2;
    prom = suma / 2;
    return prom;
};


num1 = parseInt(prompt('Ingrese un número: '));
num2 = parseInt(prompt('Ingrese otro número: '));
alert('El promedio de ambos números ingresados es ' + promNum(num1, num2));