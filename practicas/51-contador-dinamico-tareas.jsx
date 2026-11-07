import { useState } from "react";

function ContadorDinamico() {
    const [tareas, setTareas] = useState(
        [
            { id: 1, titulo: "Aprender JavaScript", completada: true },
            { id: 2, titulo: "Aprender React", completada: false },
            { id: 3, titulo: "Crear Task Master", completada: true },
            { id: 4, titulo: "Practicar React", completada: false }
        ]
    )

    return (
        <div>
            {tareas.map((elemento) => {
                return (
                    <div key={elemento.id}>
                        <h3>
                            {elemento.titulo}
                        </h3>
                        <p>
                            {elemento.completada ? "Completada" : "Pendiente"}
                        </p>
                        <button onClick={() => completarTarea(elemento.id)}>
                            Completar tarea
                        </button>
                    </div>
                )
            })}
            <div>
                <p>
                    Cantidad de tareas: {tareas.length}
                </p>
            </div>
            <div>
                <p>
                    Tareas completadas: {tareas.filter((elemento) => {
                        return elemento.completada === true
                    }).length}
                </p>
                <p>
                    Tareas pendientes: {tareas.filter((elemento) => {
                        return elemento.completada === false
                    }).length}
                </p>
            </div>
        </div>
    )
    function completarTarea(id) {
        setTareas(tareas.map((elemento) => {
            if (elemento.id === id) {
                return { ...elemento, completada: true }
            } else {
                return elemento
            }
        }))
    }
}