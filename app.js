const operaciones = ["suma", "resta", "concatenacion", "division", "porcentaje"];

function realizarOperacion() {
    const num1 = prompt("Ingresa el primer número:");
    const num2 = prompt("Ingresa el segundo número:");
    const operacion = prompt(
        "Elige la operación a realizar: suma, resta, concatenacion, division, porcentaje"
    );


    if (isNaN(num1) || isNaN(num2) || num1.trim() === "" || num2.trim() === "") {
        alert("Error: Por favor, ingresa solo números válidos.");
        return; 
    }

    if (!operaciones.includes(operacion.toLowerCase())) {
        alert("Operación no válida. Por favor, elige una opción válida.");
        return; 
    }


    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    let resultado;

    const operacionObj = {
        numero1,
        numero2,
        tipo: operacion.toLowerCase(),
        resultado: null
    };


    switch (operacion.toLowerCase()) {
        case "suma":
            operacionObj.resultado = numero1 + numero2;
            alert(`El resultado de la suma es: ${operacionObj.resultado}`);
            break;
        case "resta":
            operacionObj.resultado = numero1 - numero2;
            alert(`El resultado de la resta es: ${operacionObj.resultado}`);
            break;
        case "concatenacion":
            operacionObj.resultado = num1 + num2;
            alert(`El resultado de la concatenación es: ${operacionObj.resultado}`);
            break;
        case "division":
            if (numero2 === 0) {
                alert("No se puede dividir entre cero.");
            } else {
                operacionObj.resultado = numero1 / numero2;
                alert(`El resultado de la división es: ${operacionObj.resultado}`);
            }
            break;
        case "porcentaje":
            operacionObj.resultado = (numero1 * numero2) / 100;
            alert(`El ${num2}% de ${num1} es: ${operacionObj.resultado}`);
            break;
    }


    console.log("Datos de la operación:", operacionObj);
}

document.getElementById("startButton").addEventListener("click", realizarOperacion);
