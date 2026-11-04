const tareas = [
    { titulo: "Aprender JavaScript", completada: false },
    { titulo: "Practicar funciones", completada: true },
    { titulo: "Crear Task Master", completada: false },
    { titulo: "Aprender React", completada: true }
]

const indiceTarea = tareas.findIndex(function(elemento){
    return elemento.titulo === "Crear Task Master" 
})

console.log(indiceTarea)
console.log(tareas[indiceTarea].titulo)
console.log(tareas[indiceTarea].completada)
