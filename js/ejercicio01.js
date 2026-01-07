// 1. Declaración de variables utilizando el prefijo VAR
var miNombre = "Ivan";
var misApellidos;

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

