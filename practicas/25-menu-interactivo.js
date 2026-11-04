const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("===== TASK MASTER =====")
console.log("1. Ver tareas \n2. Agregar tarea \n3. Salir")

rl.question("Selecciona una opción: ", function(respuesta){
    if (respuesta === "1"){
        console.log("Has seleccionado ver tareas")
    } else if (respuesta === "2"){
        console.log("Has seleccionado agregar tarea")
    } else if (respuesta === "3"){
        console.log("Hasta pronto")
    } else {
        console.log("Opción no válida")
    }
    rl.close()
})