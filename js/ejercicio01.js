// Personalización de salidas a Consola
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`;
console.log("%c1.- Ejercicio 01: Declaración de Variables ", style_console);

// 1. Declaración de variables utilizando el prefijo VAR
var miNombre = "Ivan";
var misApellidos;

console.warn("Declaración de variables utilizando VAR");

//Utilizaremos la función console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es:", miNombre);
console.log("El valor de la variable misApellidos es:", misApellidos);
//Esto arroja un undefined dado que la variable no ha sido inicializada, es decir, no se le ha asignado un valor almacenado.

misApellidos = "Ojeda Allende";
//En este momento la bariable ya tiene un valor almacenado por que al imprimirlo deberá mostrar el valor asignado.
console.log("El valor de la variable misApellidos es:", misApellidos);

//Para actualizar el valor de una variable previamente declarada, solo basta con igualar el nuevo valor.
miNombre = "Ivan de Jesus";
console.log("Hola, mi nombre es:", miNombre, misApellidos);


// 2. Declaración de variables utilizando el prefijo CONST
console.warn("Declaración de variables utilizando CONST");

/* La palabra reservada CONST nos permite a nivel de memoria reservar espacio para almacenar datos de una constante que a 
diferencia de una VARIABLE esta no se puede cambiar su valor durante la ejecución del programa, de igual manera no se pueden
declarar constantes sin obligatoriamente inicializarlas, es decir asignarles un valor específico, por ejemplo:*/

const miMatricula = "240136"; 

// Imprimir el valor de una constante
console.log("El valor actual de la constante miMatricula es: ",miMatricula);

//const miEdad; // --Esto ocasiona un error por que la constante no fue inicializada

//miMatricula = "240136" ; // -- Ocasiona un error por que el valor de una CONSTANTE no puede cambiar una vez asignado.

// 3. Declaración de Variables utilizando el prefijo LET

/* La palabra reservada LET en JavaScript nos permite declarar varivales de una manera muy simmiliar a VAR, con la diferencia 
del alcance (SCOPE) de la misma, es decir, aquellas variables declaradas con var tienen un alcance global durante la 
ejecución y la LET se limitan a funciones, ciclos o bloques de codigo, eliminando los valores almanceados
una vez cumplen su función */

var miFechaNacimiento = new Date("2000-12-26")

function calcularEdad (miFechaNacimiento)
{
    // Para calcular la edad requerimos de la fecha del día de hoy
    let fechaHoy = new Date();

    /* Dado que los datos de fecha son almacenados en milisegundos por default en JavaScript, necesitamos una variable que nos 
    permite saber el numero de milisegundos por día */
    let milisegundosPorDia = 24*60*60*1000;

    /* Ya que tenemos los milisegundos por día tenemos que restar la fecha de hoy, la fecha en que nacimos para calcular los
    milisegundos que hemos vivido*/
    let diasVividos = (fechaHoy - miFechaNacimiento)/milisegundosPorDia;

    //Invocamos el método matemático de la función piso (FLOOR)
    let edad = diasVividos / 365.25
    edad = Math.floor(edad);

    return edad;

}

console.warn("-- Declaración de Variables utilizando LET --");
console.log("El valor de la variable miFechaNacimiento es: ", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log("Después de ejecutar la función de calcularEdad(), puedo saber que tienes: ", miEdad, " años.");

if(miEdad >= 18)
    {
        var esMayorDeEdad = true;
        var esMenorDeEdad = false; 
    }
    else
    {
        var esMayorDeEdad = false;
        var esMenorDeEdad = true;
    }

console.log("En base a tu edad puedo decir que el valor de esMayorDeEdad es: ", esMayorDeEdad ,
    " y el de esMenorDeEdad es: ", esMenorDeEdad);

// Interpolación de datos

/* para interpolar datos en JavaScript, es decir, mezclar la información estática, que no cambia con datos dinámicos, que 
pueden cambiar durante la ejecución del programa se requiere comenzar la cadena con un backtick (' ) y los datos que son
dinánicos estarán cerrados en llaves curvas {} antecedidas por un signo de dolar $*/

console.warn("-- Interpolación de datos --");
console.log(`Hola , ${miNombre} ${misApellidos} se que tienes: ${miEdad} años.;  por lo que eres ${esMayorDeEdad ? "mayor de edad" : "menor de edad"}.`);