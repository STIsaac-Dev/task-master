const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const contenidoJSON = fs.readFileSync("./tareas.json", "utf8");
const tareas = JSON.parse(contenidoJSON);

console.log("===== TASK MASTER =====");
console.log("1. Ver tareas \n2. Completar tarea \n3. Salir\n");

rl.question("Selecciona una opción: ", function (respuesta) {
    if (respuesta === "1") {
        console.log("\nHas seleccionado ver tareas\n");

        for (let i = 0; i < tareas.length; i++) {
            if (tareas[i].completada === true) {
                console.log(`${tareas[i].titulo} - Completada`);
            } else {
                console.log(`${tareas[i].titulo} - Pendiente`);
            }
        }
        rl.close()
    } else if (respuesta === "2") {
        console.log("\nHas seleccionado completar tarea\n");
        rl.question(
            "Introduce el titulo de la tarea: ",
            function (respuestaTitulo) {
                const tareaEncontrada = tareas.find(function (elemento) {
                    return elemento.titulo.toLowerCase().trim() === respuestaTitulo.toLowerCase().trim();
                });
                if (tareaEncontrada) {
                    if (tareaEncontrada.completada !== true) {
                        tareaEncontrada.completada = true;
                        const tareasJSON = JSON.stringify(tareas, null, 2);
                        fs.writeFileSync("./tareas.json", tareasJSON);
                        console.log("Tarea completada y guardada correctamente");
                    } else {
                        console.log("Esta tarea ya está completada")
                    }
                } else {
                    console.log("No se encontró la tarea")
                }
                rl.close()
            },
        );

    } else if (respuesta === "3") {
        console.log("Hasta pronto");
        rl.close()
    } else {
        console.log("Opción no válida");
        rl.close()
    }

});

