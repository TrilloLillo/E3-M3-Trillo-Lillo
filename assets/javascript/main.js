function calcularPropina(monto, porcentaje){
    let propina = monto * (porcentaje / 100);
    return propina;
}

let montoCuenta = prompt("Ingrese el total de la cuenta");
let porcentajePropina = prompt("ingrese el porcentaje de la propina");

let montoPropina = calcularPropina(montoCuenta, porcentajePropina);

let totalPagar = parseInt(montoCuenta) + parseInt(montoPropina);

console.log("--- Resumen de la cuenta ---");
console.log("Monto de la cuenta: $" + montoCuenta);
console.log("Propina (" + porcentajePropina + "%): $" + montoPropina);
console.log("Total a pagar: $" + totalPagar);