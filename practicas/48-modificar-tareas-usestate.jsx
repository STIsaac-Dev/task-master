import { useState } from "react";

function ModificarTareas() {
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
                        <button onClick={() => modificarTarea(elemento.id)}>
                            Modificar
                        </button>
                    </div>
                )
            })}
        </div>
    )

    function modificarTarea(id){
        setTareas(tareas.map((elemento) => {
            if (elemento.id === id) {
                return { ...elemento, titulo : "Tarea modificada" }
            }
            return elemento
        }))
    }
}

export default ModificarTareas