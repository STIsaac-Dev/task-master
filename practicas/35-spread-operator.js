const tareas = [
    "Aprender JavaScript",
    "Crear Task Master"
]

const copiaTareas = [...tareas]
copiaTareas.push("Aprender React")
console.log(tareas)
console.log(copiaTareas)

const tarea = {
    titulo: "Aprender JavaScript",
    completada: false
}

const copiaTarea = {...tarea}
copiaTarea.completada = true
copiaTarea.prioridad = 1
console.log(tarea)
console.log(copiaTarea)