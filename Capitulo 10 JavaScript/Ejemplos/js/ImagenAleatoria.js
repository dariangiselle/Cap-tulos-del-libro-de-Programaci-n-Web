// Fig. 10.12: ImagenAleatoria2.js
var imgIcono;
var imagenes = [ "ECP", "TPE", "BPP", "GUI", "REND", "PORT", "OIS" ];
var descripciones = [ "Error com&uacute;n de programaci&oacute;n",
   "Tip para prevenir errores", "Buena pr&aacute;ctica de programaci&oacute;n",
   "Observaci&oacute;n de apariencia visual", "Tip de rendimiento", "Tip de portabilidad",
   "Observaci&oacute;n de ingenier&iacute;a de software" ];

function elegirImagen()
{
   var indice = Math.floor( Math.random() * 7 );
   imgIcono.setAttribute( "src", "imagenes/" + imagenes[ indice ] + ".png" ); 
   imgIcono.setAttribute( "alt", descripciones[ indice ] );
}

function iniciar()
{
   imgIcono = document.getElementById( "imagen" );
   imgIcono.addEventListener( "click", elegirImagen, false );
}

window.addEventListener( "load", iniciar, false );