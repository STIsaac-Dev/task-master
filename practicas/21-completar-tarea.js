const tareas = [
    {
        titulo : "Aprender JavaScript",
        completada : false
    },
    {
        titulo : "Practicar funciones",
        completada : false
    },
    {
        titulo : "Crear Task Master",
        completada : false
    }
]

console.log(tareas)

tareas[1].completada = true
console.log(tareas[1].titulo)
console.log(tareas[1].completada)
console.log(tareas)