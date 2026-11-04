const tareas = [
    { titulo: "Aprender JavaScript", completada: false },
    { titulo: "Practicar funciones", completada: true },
    { titulo: "Crear Task Master", completada: false },
    { titulo: "Aprender React", completada: true }
]

const tareaEncontrada = tareas.find(function(elemento){
    return elemento.titulo === "Crear Task Master"
})

console.log(tareaEncontrada)
console.log(tareaEncontrada.titulo)
console.log(tareaEncontrada.completada)