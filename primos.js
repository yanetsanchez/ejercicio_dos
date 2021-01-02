/*
  2- Crear una función que determine si un número es primo.
  3- Mostrar los números primos entre 0 y 100.
  4- Mostrar los primeros 100 números primos.
*/

function esPrimo(numero) {
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2 ; x < numero / 2; x++) {
    if (numero % x == 0 ) return false;
  }

  return true;
}

console.log(esPrimo(6));


for(let i=0; i < 100; i++) {
  let cond = esPrimo(i)
  if(cond) {
    console.log(i + ' es primo');
  }
}

primos = 0;
for(let i=0; primos <= 100; i++) {
  let cond = esPrimo(i)
  if(cond) {
    primos++;
    console.log(primos + ' - '+ i + ' es primo');
  }
}
