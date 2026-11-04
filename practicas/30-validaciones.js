const tareas = [
    {
        titulo: "Aprender JavaScript",
        completada: false
    },
    {
        titulo: "Crear Task Master",
        completada: false
    },
    {
        titulo: "Aprender React",
        completada: false
    }
]

function validarTitulo(titulo) {
    if (titulo.trim() === "" || titulo.length < 3) {
        return "No es posible crear una tarea con ese titulo"
    } else {
        return "Titulo permitido"
    }
}

function existeTarea(tareas, titulo) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].titulo.trim().toLowerCase() === titulo.trim().toLowerCase()) {
            return "Ya existe una tarea con ese titulo"
        } 
    }
    return "No existe una tarea con ese titulo"
}

console.log(validarTitulo(""))
console.log(validarTitulo("as"))
console.log(existeTarea(tareas, "Crear Task Master"))
console.log(existeTarea(tareas, "Creacion de la web"))