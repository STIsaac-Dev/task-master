const tarea = {
    titulo: "Aprender JavaScript",
    completada: false
}

console.log(tarea)
console.log(tarea.completada)

if (tarea.completada){
    console.log("Esta tarea ya está terminada")
} else {
    tarea.completada = true
    console.log("La tarea se ha completado correctamente")
}

console.log(tarea)