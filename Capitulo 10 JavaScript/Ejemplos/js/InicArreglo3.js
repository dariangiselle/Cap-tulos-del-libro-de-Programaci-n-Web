// Fig. 10.21: InicArreglo3.js
// Inicialización de arreglos multidimensionales.
function iniciar()
{
    var arreglo1 = [ [ 1, 2, 3 ], // fila 0[cite: 23]
                     [ 4, 5, 6 ] ]; // fila 1[cite: 23]
    var arreglo2 = [ [ 1, 2 ], // fila 0[cite: 23]
                     [ 3 ], // fila 1[cite: 23]
                     [ 4, 5, 6 ] ]; // fila 2[cite: 23]

    imprimirArreglo( "Valores en arreglo1 por fila", arreglo1,
        document.getElementById( "salida1" ) );[cite: 23]
    imprimirArreglo( "Valores en arreglo2 por fila", arreglo2,
        document.getElementById( "salida2" ) );[cite: 23]
} // fin de la función iniciar[cite: 23]

// mostrar el contenido del arreglo[cite: 23]
function imprimirArreglo( encabezado, elArreglo, salida )
{
    var resultados = "";[cite: 23]

    // itera a través del conjunto de arreglos unidimensionales[cite: 23]
    for ( var fila in elArreglo )[cite: 23]
    {
        resultados += "<ol>";[cite: 23]

        // itera a través de los elementos de cada arreglo unidimensional[cite: 24]
        for ( var columna in elArreglo[ fila ] )[cite: 24]
        {
            resultados += "<li>" + elArreglo[ fila ][ columna ] + "</li>";[cite: 24]
        } // fin de for interno[cite: 24]

        resultados += "</ol>"; // fin de lista ordenada[cite: 24]
    } // fin de for externo[cite: 24]

    salida.innerHTML = resultados;[cite: 24]
} // fin de la función imprimirArreglo[cite: 24]

window.addEventListener( "load", iniciar, false );[cite: 24]