document.addEventListener("DOMContentLoaded", function() {
    const planSeleccionado = document.getElementById("planSeleccionado");
    const resultado = document.getElementById("resultado");

    planSeleccionado.addEventListener("change", () => {
        let costo = 0;
        let seleccion = planSeleccionado.value;
    
        if (seleccion === "0") {
            costo = 0;
        } else if (seleccion === "1") {
            costo = 399;
        } else if (seleccion === "2") {
            costo = 699 - (699 * 0.10);
        } else if (seleccion === "3") {
            costo = 999 - (999 * 0.40);
        }
    
        resultado.textContent = costo;
    });
});