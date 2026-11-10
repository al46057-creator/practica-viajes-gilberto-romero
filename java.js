
function calcularIndividual() {
    var total = 0;

    // 1. VUELO
    var vuelo = formIndividual.elements["vuelo"].value;

    if (vuelo == "sin-avion") {
        total += 999;
    } 
    else if (vuelo == "ida") {
        total += 2499;
    } 
    else if (vuelo == "ida-vuelta") {
        total += 5999;
    }

    // 2. HOSPEDAJE
    var hospedaje = formIndividual.elements["hospedaje"].value;

    if (hospedaje == "sin-hotel") {
        total += 499;
    } 
    else if (hospedaje == "sencilla") {
        total += 799;
    } 
    else if (hospedaje == "doble") {
        total += 999;
    }

    // 3. ADULTOS
    var adultos = parseInt(document.getElementById("adultos").value);
    total += adultos * 865;

    // 4. MENORES
    var menores = parseInt(document.getElementById("menores").value);
    total += menores * 437;

    // 5. DÍAS
    var dias = parseInt(document.getElementById("diasIndividual").value);

    if (isNaN(dias) || dias < 1) {
        alert("Escriba un número de días válido en la sección Individual");
        return;
    }

    total += dias * 769;

    // 6. MOSTRAR TOTAL DE TODO EL VIAJE
    document.getElementById("totalIndividual").value =
        "$" + total.toLocaleString('es-MX') + " MXN";
}
