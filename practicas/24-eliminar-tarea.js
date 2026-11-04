const tareas = [
    { titulo: "Aprender JavaScript", completada: false },
    { titulo: "Practicar funciones", completada: true },
    { titulo: "Crear Task Master", completada: false },
    { titulo: "Aprender React", completada: true }
]

const indiceTarea = tareas.findIndex(function(elemento){
    return elemento.titulo === "Practicar funciones" 
})

console.log(tareas)

tareas.splice(indiceTarea, 1)

console.log(tareas)
console.log(tareas.length)