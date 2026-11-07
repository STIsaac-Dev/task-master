const tareas = [
    { titulo: "Aprender JavaScript", completada: true },
    { titulo: "Crear Task Master", completada: false },
    { titulo: "Aprender React", completada: true },
    { titulo: "Aprender Node.js", completada: false }
]

const titulosTareas = tareas.map((elemento) => {
    return elemento.titulo
})

const filtroTareas = tareas.filter((elemento) => {
    return elemento.completada === true
})

const busquedaTarea = tareas.find((elemento) => {
    return elemento.titulo === "Crear Task Master"
})

console.log(titulosTareas)
console.log(filtroTareas)
console.log(busquedaTarea)