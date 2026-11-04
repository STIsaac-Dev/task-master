const fs = require("fs")
const contenidoJSON = fs.readFileSync("./tareas.json", "utf8")

const tareas = JSON.parse(contenidoJSON)

for (let i = 0; i < tareas.length; i++){
    console.log(`${tareas[i].titulo} - ${tareas[i].completada} `)
}