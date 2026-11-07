import { useState } from "react";

function EliminarTareas() {
    const [tareas, setTareas] = useState([
        { id: 1, titulo: "Aprender JavaScript" },
        { id: 2, titulo: "Aprender React" },
        { id: 3, titulo: "Crear Task Master" }
    ])

    return (
        <div>
            {tareas.map((elemento) => {
                return (
                    <div key={elemento.id}>
                        <p>
                            {elemento.titulo}
                        </p>
                        <button onClick={() => eliminarTarea(elemento.id)}>
                            Eliminar Tarea
                        </button>
                    </div>)
            })}
        </div>
    )

    function eliminarTarea(id) {
        setTareas(tareas.filter((elemento) => elemento.id !== id))
    }
}

export default EliminarTareas