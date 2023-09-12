let contraseña, correo;
function tomarDatos() {
    let email = document.getElementById("correo").value;
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    let validarPassword = document.getElementById("validar").value;
    if (email != null && email.length != 0) {
        if (nombre != null && nombre.length != 0) {
            if (password != null && password.length != 0) {
                if (validarPassword != null && validarPassword.length != 0) {
                    if (password == validarPassword) {
                        localStorage.setItem("correo", email);
                        localStorage.setItem("contraseña", password);
                        window.location.assign("./login.html");
                    }
                    else if (password != validarPassword) {
                        alert("Las contraseñas no son iguales");
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    }
                    else {
                        alert("Valores no validos.");
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    }
                }
                else {
                    alert("Valores no validos.");
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
            }
            else {
                alert("Valores no validos.");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
        }
        else {
            alert("Valores no validos.");
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    }
    else {
        alert("Valores no validos.");
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
}

function validarDatos() {
    let validarCorreo = document.getElementById("validarCorreo").value;
    let logPassword = document.getElementById("logPassword").value;
    let correoRegistrado = localStorage.getItem("correo");
    let contraseñaRegistrada = localStorage.getItem("contraseña");
    if (validarCorreo != null && validarCorreo.length != 0) {
        if (logPassword != null && logPassword.length != 0) {
            if (correoRegistrado == validarCorreo) {
                if (logPassword == contraseñaRegistrada) {
                    window.location.assign("./Index.html");
                }
                else {
                    alert("Los datos proporcionados no coinciden.");
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                }
            }
            else {
                alert("Los datos proporcionados no coinciden.");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
        }
        else {
            alert("Los datos proporcionados no coinciden.");
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }
    }
    else {
        alert("Los datos proporcionados no coinciden.");
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
}   