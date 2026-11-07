import { useState } from "react";

function AgregarTareas() {
    const [tareas, setTareas] = useState([
        {
            id: 1,
            titulo: "Aprender JavaScript"
        },
        {
            id: 2,
            titulo: "Aprender React"
        }
    ])

    const nuevaTarea = {
        id: 3,
        titulo: "Crear Task Master"
    }

    function agregarTarea() {
        setTareas([
            ...tareas, nuevaTarea
        ])
    }

    return (
        <div>
            {tareas.map((elemento) => (
                <div key={elemento.id}>
                    <p>
                        {elemento.titulo}
                    </p>
                    <p>
                        {elemento.completada ? "Completada" : "Pendiente"}
                    </p>
                </div>
            ))}
            <button onClick={agregarTarea}>
                Agregar tarea
            </button>
        </div>
    )
}

export default AgregarTareas