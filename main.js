/// Calcular costo de viaje ///
const destinos = [
    "brasil",
    "chile",
    "uruguay",
    "bolivia"
]

const precios = [
    25000,
    58400,
    35500,
    45500,
]


const alojamientos = [
    ["brasil", "Hotel Atlantico"],
    ["brasil", "Copacabana Design Hotel"],
    ["chile", "Sheraton"],
    ["chile", "Le Reve Boutique"],
    ["bolivia", "Hotel Palacio De Sal"],
    ["bolivia", "Las Olas"],
    ["uruguay", "Hyatt"],
    ["uruguay", "Alma Historica"],
]

function obtenerAlojamiento(pais) {
    let _alojamiento;
    const alojamientosPais = alojamientos.filter(function (alojamiento) {
        const _pais = alojamiento[0]
        const esMismoPais = pais == _pais
        return esMismoPais
    })
    const opciones = alojamientosPais.map((alojamiento, indice) => {
        const lugar = alojamiento[1]
        return `${indice + 1}- ${lugar}`
    }).join("\n")
    console.log(JSON.stringify(opciones))

    while (_alojamiento == undefined) {
        const input = parseInt(prompt("Dónde prefiere alojarse? Ingrese el número de opción: \n" + opciones))
        if (!isNaN(input) && input <= alojamientosPais.length && input > 0) {
            const indice = input - 1
            _alojamiento = alojamientosPais[indice][1]
        }
    }
    alert("Usted se va a alojar en: " + _alojamiento)
    return _alojamiento;

}

function obtenerPrecioPais() {
    let _precio;
    let _pais;

    const destinosOrdenados = destinos.sort()
    const opciones = destinosOrdenados.join(", ")

    while (_precio == undefined) {

        _pais = prompt(`¿A dónde desea viajar? Elija entre ${opciones}:`);

        for (let i = 0; i < destinos.length; i++) {
            const destino = destinos[i];
            if (destino == _pais) {
                _precio = precios[i]
            }
        }
    }
    const resultado = {
        pais: _pais,
        precio: _precio
    }
    return resultado
}

function obtenerPersonas() {
    let cantidadPersonas
    while (cantidadPersonas == undefined) {
        const input = parseInt(prompt("¿Cuántas personas viajarán? Por favor ingrese un número valido"))
        if (!isNaN(input) && input > 0) {
            cantidadPersonas = input
        }
    }
    return cantidadPersonas

}

function calcularCostoViaje(pais, precio, cantidadPersonas) {
    let costoTotal = precio * cantidadPersonas;
    alert(`El costo total para ${cantidadPersonas} personas a ${pais} es de $${costoTotal}.`);
}

function iniciarCalculadora() {
    const { pais, precio } = obtenerPrecioPais()
    const cantidadPersonas = obtenerPersonas()
    calcularCostoViaje(pais, precio, cantidadPersonas)
    obtenerAlojamiento(pais)
}

iniciarCalculadora()