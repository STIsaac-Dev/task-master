import { useState } from "react";

function CompletarTareas() {
    const [tareas, setTareas] = useState(
        [
            { id: 1, titulo: "Aprender JavaScript", completada: false },
            { id: 2, titulo: "Aprender React", completada: false },
            { id: 3, titulo: "Crear Task Master", completada: false }
        ]
    )

    return (
        <div>
            {tareas.map((elemento) => {
                return (<div key={elemento.id}>
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
        </div>
    )

    function completarTarea(id){
        setTareas(tareas.map((elemento) => {
            if (elemento.id === id){
                return {...elemento, completada : true}
            } else {
                return elemento
            }
        }))
    }
}

export default CompletarTareas