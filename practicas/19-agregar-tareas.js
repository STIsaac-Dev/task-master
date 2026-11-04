const tareas = [
    {
        titulo : "Aprender JavaScript",
        completada : false
    },
    {
        titulo : "Practicar funciones",
        completada : true
    }
]

console.log(tareas)

tareas.push({
    titulo : "Crear Task Master",
    completada : false
},
{
    titulo : "Aprender React",
    completada : false
})

console.log(tareas)
console.log(tareas.length)