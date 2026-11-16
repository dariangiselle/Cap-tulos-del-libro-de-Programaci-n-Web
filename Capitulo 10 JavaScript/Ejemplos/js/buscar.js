// Fig. 10.18: buscar.js
// Buscar en un arreglo mediante indexOf.
var a = new Array( 100 ); // crear un arreglo[cite: 21]

// llenar el arreglo con valores enteros pares de 0 a 198[cite: 21]
for ( var i = 0; i < a.length; ++i )[cite: 21]
{
    a[ i ] = 2 * i;[cite: 21]
} // fin de for[cite: 21]

// la función se invoca cuando se presiona el botón "Buscar"[cite: 21]
function botonPresionado()[cite: 21]
{
    // obtener el campo de texto de entrada[cite: 21]
    var valEntrada = document.getElementById( "valEntrada" );[cite: 21]

    // obtener el párrafo de resultado[cite: 21]
    var resultado = document.getElementById( "resultado" );[cite: 21]

    // obtener la clave de búsqueda del campo de texto de entrada y luego realizar la búsqueda[cite: 21]
    var claveBusqueda = parseInt( valEntrada.value );[cite: 21]
    var elemento = a.indexOf( claveBusqueda );[cite: 21]

    if ( elemento != -1 )[cite: 21]
    {
        resultado.innerHTML = "Se encontr&oacute; el valor en el elemento " + elemento;[cite: 21]
    } // fin de if[cite: 21]
    else[cite: 21]
    {
        resultado.innerHTML = "No se encontr&oacute; el valor";[cite: 21]
    } // fin de else[cite: 21]
} // fin de la función botonPresionado[cite: 21]

// registra el manejador de eventos de clic de botonBuscar[cite: 21]
function iniciar()[cite: 21]
{
    var botonBuscar = document.getElementById( "botonBuscar" );[cite: 21]
    botonBuscar.addEventListener( "click", botonPresionado, false );[cite: 21]
} // fin de la función iniciar[cite: 21]

window.addEventListener( "load", iniciar, false );[cite: 21]