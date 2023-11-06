function calcularPrecio() {
    const precioUnitario = 1000;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    const categoria = document.getElementById("categoria").value;

    let descuentoTexto = "";

    switch (categoria) {
        case "Estudiante":
            descuentoTexto = "Estudiante (80% de descuento)";
            break;
        case "Trainee":
            descuentoTexto = "Trainee (50% de descuento)";
            break;
        case "Junior":
            descuentoTexto = "Junior (15% de descuento)";
            break;
    }

    const descuento = (100 - getDescuentoPorCategoria(categoria)) / 100;

    const total = cantidad * precioUnitario * descuento;

    document.getElementById("descuento").textContent = `Descuento: ${descuentoTexto}`;
    document.getElementById("resultado").textContent = `Total a Pagar: $${total.toFixed(2)}`;
}

function changeSel(valor) {
    let descuentoTexto = "";

    switch (valor) {
        case "Estudiante":
            descuentoTexto = "Estudiante (80% de descuento)";
            break;
        case "Trainee":
            descuentoTexto = "Trainee (50% de descuento)";
            break;
        case "Junior":
            descuentoTexto = "Junior (15% de descuento)";
            break;
    }

    document.getElementById("descuento").textContent = `Descuento: ${descuentoTexto}`;
    document.getElementById("resultado").textContent = "Total a Pagar: $0.00";
}

function getDescuentoPorCategoria(categoria) {
    switch (categoria) {
        case "Estudiante":
            return 80;
        case "Trainee":
            return 50;
        case "Junior":
            return 15;
        default:
            return 0;
    }
}
