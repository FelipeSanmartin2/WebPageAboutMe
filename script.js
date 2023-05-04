function multiplicar() {
    let resultado = document.querySelector(".resultado");
    let a = Number(document.getElementById("numeroA").value)
    let b = Number(document.getElementById("numeroB").value)
    resultado.innerHTML = "el resultado multiplicado de ambos numeros es " + a * b;
}

function numeroPrimo() {
    let resultadoPrimos = document.querySelector(".resultadoPrimos");
    let a = Number(document.getElementById("primoA").value)
    if (a <= 1) { // El 0, 1 y números negativos no son primos
        resultadoPrimos.innerHTML = "no es un numero Primo";
    } else if (a >= 1) {
        let primos = []; // inicia una array vacia
        for (let i = 2; i <= a; i++) { // la primera iteracion del 2 al valor a 
            let esPrimo = true;
            for (let j = 2; j < i; j++) { // el filtro para dejar fuera los numeros no primos dejando "esPrimos" como falso
                if (i % j === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {   // cuando es esprimo es verdadero pasa a un push de la variable primos 
                primos.push(i);
            }
        }
        resultadoPrimos.innerHTML = "Los Valores Primos son " + primos.map(num => `<span>${num}</span>`).join(" ,");
    }
}