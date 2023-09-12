// Esta función evalua que un dato tenga un valor numerico o no
function is_numeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// Variables globales (fuera de la función)
let lugar_fiesta, hora_Fiesta, comida_opc, recreacion, show_artistico;
let recor, decor, musical, refri, drink, mesero, invi, divu, md_pagos;
let znocc, znoriente, zcenocc, zsuroriente, zsurocc, zoriente, zoccidente;
let pago_total = 0, total_invitados = 0, mini_invitados = 0, niñas_inv = 0, niños_inv = 0, maxi_invitados = 0, meseros = 0, pago_subtotal = 0, tiempo = 0;
//Arrays que gurdan los valores de opciones que escogio el usuario
let mostrarSiYNo = ["", "", "", "", "", "", "", ""];
let datos = ["", "", "", "", "", ""];
let mostrarDatos = ["", "", "", "", "", ""];
let siYno = ["", "", "", "", "", "", "", ""];
let zonas = ["", "", "", "", "", "", ""];
// Llamados a los elementos del HTML
lugar_fiesta = document.getElementById("sitio");
hora_Fiesta = document.getElementById("duracionHora");
comida_opc = document.getElementById("servcomida");
recreacion = document.getElementById("servrecreacion");
show_artistico = document.getElementById("shows");
recor = document.querySelectorAll(".recordatorio");
decor = document.querySelectorAll(".decoracion");
musical = document.querySelectorAll(".musica");
refri = document.querySelectorAll(".refrigerio");
drink = document.querySelectorAll(".bebida");
mesero = document.querySelectorAll(".meseros");
invi = document.querySelectorAll(".invitacion");
divu = document.querySelectorAll(".divulgacion");
md_pagos = document.getElementById("mediospago");
//Variables de almacenamiento servicio de conductor elegido
zonas[0] = document.getElementById("srv-znororiente").value;
zonas[1] = document.getElementById("srv-znoroccidente").value;
zonas[2] = document.getElementById("srv-zcentro").value;
zonas[3] = document.getElementById("srv-zsuroriente").value;
zonas[4] = document.getElementById("srv-zsuroccidente").value;
zonas[5] = document.getElementById("srv-zoriente").value;
zonas[6] = document.getElementById("srv-zoccidente").value;
// pago_subtotal = 0;
const tari_base = 150000;

// Selector de duracion en horas de la fiesta
for (let duracionHoras = 0; duracionHoras <= 24; duracionHoras++) {
    const opcion = document.createElement("option");
    opcion.value = duracionHoras;
    if (duracionHoras == 0) {
        opcion.text = "Hrs"
    } else {
        opcion.text = duracionHoras + " hrs"
    }
    hora_Fiesta.appendChild(opcion);
}

// Selector para el lugar de la reunion
for (let i = 1; i < 4; i++) {
    const opcion = document.createElement("option");
    opcion.value = i;
    if (i == 1) {
        opcion.text = "Salon tipo A";
    }
    if (i == 2) {
        opcion.text = "Salon tipo B";
    }
    if (i == 3) {
        opcion.text = "Salon tipo C";
    }
    lugar_fiesta.appendChild(opcion);
}

// Selector para el servicio de comida
for (let comida = 1; comida < 8; comida++) {
    const opcion = document.createElement("option");
    opcion.value = comida;
    if (comida == 1) {
        opcion.text = "Buffet";
    }
    if (comida == 2) {
        opcion.text = "Plato especial";
    }
    if (comida == 3) {
        opcion.text = "Plato económico";
    }
    if (comida == 4) {
        opcion.text = "Comida formal";
    }
    if (comida == 5) {
        opcion.text = "Típica colombiana";
    }
    if (comida == 6) {
        opcion.text = "Combo andino";
    }
    if (comida == 7) {
        opcion.text = "Ninguno";
    }
    comida_opc.appendChild(opcion);
}

// Selector para el servicio de recreación
for (let tipo_recreacion = 1; tipo_recreacion <= 4; tipo_recreacion++) {
    const opcion = document.createElement("option");
    opcion.value = tipo_recreacion;
    if (tipo_recreacion == 1) {
        opcion.text = "Ambos";
    }
    if (tipo_recreacion == 2) {
        opcion.text = "Niño";
    }
    if (tipo_recreacion == 3) {
        opcion.text = "Adulto";
    }
    if (tipo_recreacion == 4) {
        opcion.text = "Ninguno";
    }
    recreacion.appendChild(opcion);
}

// Selector para los espectaculos artisticos
for (let tipo_espectaculo = 1; tipo_espectaculo < 6; tipo_espectaculo++) {
    const opcion = document.createElement("option");
    opcion.value = tipo_espectaculo;
    if (tipo_espectaculo == 1) {
        opcion.text = "Infantil Andante";
    }
    if (tipo_espectaculo == 2) {
        opcion.text = "Infantil Agagio";
    }
    if (tipo_espectaculo == 3) {
        opcion.text = "Adulto Vivace";
    }
    if (tipo_espectaculo == 4) {
        opcion.text = "Adulto presto";
    }
    if (tipo_espectaculo == 5) {
        opcion.text = "Ninguno";
    }
    show_artistico.appendChild(opcion);
}

//Selector para los medios de pago
for (let medios_pago = 1; medios_pago < 7; medios_pago++) {
    const opcion = document.createElement("option");
    opcion.value = medios_pago;
    if (medios_pago == 1) {
        opcion.text = "Tarjeta Débito";
    }
    if (medios_pago == 2) {
        opcion.text = "Tarjeta Crédito";
    }
    if (medios_pago == 3) {
        opcion.text = "Cheque al dia";
    }
    if (medios_pago == 4) {
        opcion.text = "Cheque post-fechado";
    }
    if (medios_pago == 5) {
        opcion.text = "Efectivo";
    }
    if (medios_pago == 6) {
        opcion.text = "Bono corporativo";
    }
    md_pagos.appendChild(opcion);
}

function tomarDatos() {
    // Estos bucles seleccionan y almacenan los valores de si y no que hay en el html
    for (const radioButton of recor) {
        if (radioButton.checked) {
            siYno[0] = radioButton.value;
            mostrarSiYNo[0] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }

    for (const radioButton of decor) {
        if (radioButton.checked) {
            siYno[1] = radioButton.value;
            mostrarSiYNo[1] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }

    for (const radioButton of musical) {
        if (radioButton.checked) {
            siYno[2] = radioButton.value;
            mostrarSiYNo[2] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }

    for (const radioButton of refri) {
        if (radioButton.checked) {
            siYno[3] = radioButton.value;
            mostrarSiYNo[3] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }

    for (const radioButton of drink) {
        if (radioButton.checked) {
            siYno[4] = radioButton.value;
            mostrarSiYNo[4] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }

    for (const radioButton of mesero) {
        if (radioButton.checked) {
            siYno[5] = radioButton.value;
            mostrarSiYNo[5] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }
    for (const radioButton of invi) {
        if (radioButton.checked) {
            siYno[6] = radioButton.value;
            mostrarSiYNo[6] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }

    for (const radioButton of divu) {
        if (radioButton.checked) {
            siYno[7] = radioButton.value;
            mostrarSiYNo[7] = radioButton.value === "0" ? "No" : "Si";
            break;
        }
    }
    return siYno, mostrarSiYNo;
}

function convertirDatos() {
    //Esta posición del array guarda información acerca de la clase del luagr donde se va a reaizar la fiesta
    datos[0] = lugar_fiesta.value;
    switch (datos[0]) {
        case "1":
            mostrarDatos[0] = "Salon de gran categoria";
            break;
        case "2":
            mostrarDatos[0] = "Salon de categoria media";
            break;
        case "3":
            mostrarDatos[0] = "En tu hogar";
            break;
    }

    datos[1] = comida_opc.value;
    switch (datos[1]) {
        case "1":
            mostrarDatos[1] = "Buffet";
            break;
        case "2":
            mostrarDatos[1] = "Plato especial";
            break;
        case "3":
            mostrarDatos[1] = "Plato esconomico";
            break;
        case "4":
            mostrarDatos[1] = "Comida formal";
            break;
        case "5":
            mostrarDatos[1] = "Típica colombiana";
            break;
        case "6":
            mostrarDatos[1] = "Combo andino";
            break;
    }

    datos[2] = hora_Fiesta.value;
    mostrarDatos[2] = datos[2]; // Mantén la hora sin procesar en mostrarDatos

    datos[3] = recreacion.value;
    switch (datos[3]) {
        case "1":
            mostrarDatos[3] = "Ambos";
            break;
        case "2":
            mostrarDatos[3] = "Recreación para niños.";
            break;
        case "3":
            mostrarDatos[3] = "Recreación para adultos";
            break;
        case "4":
            mostrarDatos[3] = "Ninguno";
            break;
    }

    datos[4] = show_artistico.value;
    switch (datos[4]) {
        case "1":
            mostrarDatos[4] = "Musical infantil Andante";
            break;
        case "2":
            mostrarDatos[4] = "Musical infantil Adagio";
            break;
        case "3":
            mostrarDatos[4] = "Musical adulto Vivace";
            break;
        case "4":
            mostrarDatos[4] = "Musical adulto Presto";
            break;
        case "5":
            mostrarDatos[4] = "Ninguno";
            break;
    }

    datos[5] = md_pagos.value;
    switch (datos[5]) {
        case "1":
            mostrarDatos[5] = "Tarjeta débito";
            break;
        case "2":
            mostrarDatos[5] = "Tarjeta crédito";
            break;
        case "3":
            mostrarDatos[5] = "Cheque al día";
            break;
        case "4":
            mostrarDatos[5] = "Cheque post-fechado";
            break;
        case "5":
            mostrarDatos[5] = "Efectivo";
            break;
        case "6":
            mostrarDatos[5] = "Bono corporativo";
            break;
    }

    return datos, mostrarDatos;
}

function calcular_pago() {
    //  La idea del script es que calcule  los pagos y cada que el cliente cambie sus opciones presionando el boton muestre un valor de pago distinto pero no ocurree nada y siempre muestra el mismo  valor
    pago_total = 0;
    meseros = 0;
    tiempo = parseInt(datos[2]);
    pago_subtotal = 0;
    //Estas variables almacenan información sobre la cantidad de viajes por zona
    let invi_tmp = 0, meseros_tmp = 0, meseros_adi = 0, pago_tmp = 0, tiempo_tmp = 0;
    let pay_lugar = 0, pay_eat = 0, pay_recor = 0, pay_decor = 0, pay_rec = 0, pay_music = 0, pay_refri = 0, pay_drink = 0, pay_meseros = 0, pay_arti = 0, pay_print = 0, pay_divu = 0, pay_mediopago = 0;
    //Agregar costos de el lugar de recepcion
    switch (datos[0]) {
        case "1": if (tiempo < 6) {
            pay_lugar += 2500000;
        }
        else if (tiempo > 5) {
            tiempo_tmp = tiempo - 5;
            pay_lugar = tiempo_tmp * 250000;
            pay_lugar += 2500000;
        }
            break;
        case "2": if (tiempo < 4) {
            pay_lugar += 1800000;
        }
        else if (tiempo > 3) {
            tiempo_tmp = tiempo - 3;
            pay_lugar = tiempo_tmp * 175000;
            pay_lugar += 1800000;
        }
            break;
        case "3":
            pay_lugar += 0;
            break;
    }
    // Agregar costos de el tipo de comida de la reunion
    switch (datos[1]) {
        case "1": pay_eat = (17500 * total_invitados);
            break;
        case "2": pay_eat = (13500 * total_invitados);
            break;
        case "3": pay_eat = (11000 * total_invitados);
            break;
        case "4": pay_eat = (8500 * total_invitados);
            break;
        case "5": pay_eat = (14950 * total_invitados);
            break;
        case "6": pay_eat = (28000 * (total_invitados / 2));
            break;
    }
    //Agregar costos de recordatorios
    switch (siYno[0]) {
        case "0": pay_recor += 0;
            break;
        case "1": pay_recor = (4500 * niños_inv) + (6750 * niñas_inv) + (2950 * maxi_invitados);
            break;
    }
    //Agregar costos de decoración
    switch (siYno[1]) {
        case "0": pay_decor += 0;
            break;
        case "1":
            switch (datos[0]) {
                case "1": pay_decor += 200000;
                    break;
                case "2": pay_decor += 125000;
                    break;
                case "3": pay_decor += 190000;
                    break;
            }
            break;
    }

    //Agregar costos de recreacion
    switch (datos[3]) {
        case "1": pay_rec = (250000 * tiempo) + (180000 * tiempo);
            break;
        case "2": pay_rec = (250000 * tiempo);
            break;
        case "3": pay_rec = (180000 * tiempo);
            break;
        case "4": pay_rec += 0;
            break;
    }

    //Agregar costos de musica en vivo
    switch (siYno[2]) {
        case "0": pay_music += 0;
            break;
        case "1":
            switch (datos[0]) {
                case "1": if (tiempo <= 3) {
                    pay_music += 950000;
                }
                else {
                    tiempo_tmp = tiempo - 3;
                    pay_music = tiempo_tmp * 250000;
                    pay_music = pay_music + 950000;
                }
                    break;
                case "2": if (tiempo <= 4) {
                    pay_music += 650000;
                }
                else {
                    tiempo_tmp = tiempo - 4;
                    pay_music = tiempo_tmp * 125000;
                    pay_music = pay_music + 650000;
                }
                    break;
                case "3": pay_music = tiempo * 300000;
                    break;
            }
    }

    //Agregar costos de refrigerios
    switch (siYno[3]) {
        case "0": pay_refri += 0;
            break;
        case "1": pay_refri = (7500 * mini_invitados) + (9000 * maxi_invitados);
            break;
    }

    //Agregar costos de bebidas
    switch (siYno[4]) {
        case "0": pay_drink += 0;
            break;
        case "1": pay_drink = (mini_invitados * 4450) + (maxi_invitados * 15750);
            break;
    }

    //Agregar costos de meseros
    switch (siYno[5]) {
        case "0": pay_meseros += 0;
            break;
        case "1": meseros_tmp = (total_invitados / 30) * 5; //calcula la cantidad de meseros base
            invi_tmp = total_invitados / 100; //Calcula cuantos grupo de 100 inv 
            meseros_adi = invi_tmp * 2; // cantidad de meseros adicionales
            meseros = meseros_adi + meseros_tmp;
            meseros = Math.round(meseros);
            pay_meseros = meseros_tmp * (20000 * tiempo); // costo de meseros base 
            pay_meseros = pay_meseros + (meseros_adi * 18000 * tiempo); //suma el costo de meseros base y meseros adicionales por hora
            break;
    }

    //Agregar costos de espectaculos artisticos
    switch (datos[4]) {
        case "1": pay_arti += 1000000;
            break;
        case "2": pay_arti += 2500000;
            break;
        case "3": pay_arti += 4000000;
            break;
        case "4": pay_arti += 5500000;
            break;
        case "5": pay_arti += 0;
            break;
    }

    //Agregar cotos de impresión de invitaciones
    switch (siYno[6]) {
        case "0": pay_print += 0;
            break;
        case "1": pay_print = mini_invitados * 2000;
            break;
    }

    //Agregar costos de divulgación
    switch (siYno[7]) {
        case "0": pay_divu += 0;
            break;
        case "1": pay_divu += 2725000;
            break;
    }

    //Agregar costos de conductor elegido
    //Aqui ocurre un error ya que zonas[], no extrae los valores  del html por lo tanto siempre esta vacio el array
    //Este bucle le da el valor de 0 a los espacios en que el usuario no requirio el servicio
    for (let f = 0; f < 7; f++) {
        if (zonas[f] === "") {
            zonas[f] = "0";
        }
    }
    pago_subtotal = parseInt(zonas[0]) * (tari_base * 0.05 + tari_base);
    pago_subtotal = pago_subtotal + parseInt(zonas[1]) * (tari_base * 0.1 + tari_base);
    pago_subtotal = pago_subtotal + parseInt(zonas[2]) * (tari_base);
    pago_subtotal = pago_subtotal + parseInt(zonas[3]) * (tari_base * 0.2 + tari_base);
    pago_subtotal = pago_subtotal + parseInt(zonas[4]) * (tari_base + tari_base * 0.15);
    pago_subtotal = pago_subtotal + parseInt(zonas[5]) * (tari_base - tari_base * 0.05);
    pago_subtotal = pago_subtotal + parseInt(zonas[6]) * tari_base;
    pago_subtotal = pay_arti + pay_decor + pay_divu + pay_drink + pay_eat + pay_lugar + pay_meseros + pay_music + pay_print + pay_rec + pay_recor + pay_refri;
    //Agregar porcentajes de medios de pago
    switch (datos[5]) {
        case "1": pago_tmp = pago_subtotal * 0.075;
            pago_total = pago_subtotal + pago_tmp;
            break;
        case "2": pago_tmp = pago_subtotal * 0.125;
            pago_total = pago_subtotal + pago_tmp;
            break;
        case "3": pago_tmp = pago_subtotal * 0.05;
            pago_total = pago_subtotal + pago_tmp;
            break;
        case "4": pago_tmp = pago_subtotal * 0.185;
            pago_total = pago_subtotal + pago_tmp;
            break;
        case "5": pago_tmp = pago_subtotal * 0.1;
            pago_total = pago_subtotal - pago_tmp;
            break;
        case "6": pago_tmp = pago_subtotal * 0.15;
            pago_total = pago_subtotal + pago_tmp;
            break;

    }
    //El valor del pago nunca cambia 
    return zonas, pago_subtotal, pago_total, meseros;
}

function mostrarCotizacion() {
    niños_inv = document.getElementById("cantNiñas").value;
    niños_inv = parseInt(niños_inv);
    niñas_inv = parseInt(document.getElementById("cantNiños").value);
    mini_invitados = niñas_inv + niños_inv;
    if (is_numeric(mini_invitados) && mini_invitados > 0) {
        if (mini_invitados <= 60) {
            total_invitados = mini_invitados * 3;
            maxi_invitados = total_invitados - mini_invitados;

            // Llama a las funciones para obtener los datos actualizados
            tomarDatos();
            convertirDatos();
            calcular_pago();

            // Muestra los datos en la consola
            console.log("siYno:", siYno);
            console.log("mostrarSiYNo:", mostrarSiYNo);
            console.log("datos:", datos);
            console.log("mostrarDatos:", mostrarDatos);

            document.getElementById("mostrardatos").innerHTML =
                "Niños invitados: " +
                niños_inv +
                "<br>Niñas invitadas: " +
                niñas_inv +
                "<br>Total niñ@ invitados: " +
                mini_invitados +
                "<br>Adultos invitados: " +
                maxi_invitados +
                "<br>Total invitados: " +
                total_invitados +
                "<br>Sitio: " +
                mostrarDatos[0] +
                "<br>Duración: " +
                mostrarDatos[2] +
                " horas<br>Servicio de comida: " +
                mostrarDatos[1] +
                "<br>Recordatorios: " +
                mostrarSiYNo[0] +
                "<br>Decoracion: " +
                mostrarSiYNo[1] +
                "<br>Recreación: " +
                mostrarDatos[3] +
                "<br>Show musical: " +
                mostrarSiYNo[2] +
                "<br>Refrigerio: " +
                mostrarSiYNo[3] +
                "<br>Bebidas: " +
                mostrarSiYNo[4] +
                "<br>Meseros: " +
                mostrarSiYNo[5] + " cantidad: " + meseros +
                "<br>Show artistico: " +
                mostrarDatos[4] +
                "<br>Impresión de invitaciones: " +
                mostrarSiYNo[6] +
                "<br>Divulgación: " +
                mostrarSiYNo[7] +
                "<br>Medio de pago: " +
                mostrarDatos[5] +
                "<br>Subtotal: " +
                pago_subtotal +
                "<br>Costo total: " +
                pago_total;
        } else {
            window.alert(
                "Según el número de invitados te recomiendo que requieras una cotización para una piñata. Redireccionando a la página de piñaticas"
            );
            window.location.assign("piñata.html");
        }
    } else {
        window.alert("Ingresa una cantidad válida de invitados.");
    }
}

// Agregar evento al botón para calcular cotización
const calcularBoton = document.getElementById("calcularBoton");
calcularBoton.addEventListener("click", mostrarCotizacion);