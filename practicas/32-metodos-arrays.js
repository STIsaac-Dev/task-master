const tareas = [
    { titulo: "Aprender JavaScript", completada: true },
    { titulo: "Crear Task Master", completada: false },
    { titulo: "Aprender React", completada: true },
    { titulo: "Aprender Node.js", completada: false }
]

const titulos = tareas.map(function(elemento){
    return elemento.titulo
})

const filtroTareas = tareas.filter(function(elemento){
    return elemento.completada === true
})

const busquedaTitulo = tareas.find(function(elemento){
    return elemento.titulo === "Crear Task Master"
})

console.log(titulos)
console.log(filtroTareas)
console.log(busquedaTitulo)