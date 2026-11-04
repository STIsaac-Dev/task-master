const fs = require("fs");
const contenidoJSON = fs.readFileSync("./tareas.json", "utf8");
const tareas = JSON.parse(contenidoJSON);
for (let i = 0; i < tareas.length; i++) {
  if (tareas[i].completada === true) {
    console.log(`${tareas[i].titulo} - Completada`);
  } else {
    console.log(`${tareas[i].titulo} - Pendiente`);
  }
}
const tareaEncontrada = tareas.find(function(elemento){
    return elemento.titulo === "Crear Task Master"
})

tareaEncontrada.completada = true

const tareasJSON = JSON.stringify(tareas, null, 2)
fs.writeFileSync("./tareas.json", tareasJSON)
console.log("Las tareas se han guardado correctamente")