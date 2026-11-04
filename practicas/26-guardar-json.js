const fs = require("fs")
const tareas = [
    {
        titulo : "Aprender JavaScript",
        completada : false
    },
    {
        titulo : "Crear Task Master",
        completada : false
    },
    {
        titulo : "Aprender React",
        completada : false
    }
]

const tareasJSON = JSON.stringify(tareas, null, 2)
fs.writeFileSync("./practicas/tareas.json", tareasJSON)
console.log("Las tareas se han guardado correctamente")
