import { useState } from "react";

function EditarTituloTareas(){
    const [tareas, setTareas] = useState([
        {
            id: 1,
            titulo: "Aprender React",
            completada: false
        },
        {
            id: 2,
            titulo: "Aprender JavaScript",
            completada: false
        },
        {
            id: 3,
            titulo: "Crear Task Master",
            completada: false
        }
    ])

    return (
        <div>
            {tareas.map((elemento) => {
                return (
                    <div key={elemento.id}>
                        <h2>
                            {elemento.titulo}
                        </h2>
                        <p>
                            {elemento.completada ? "Completada" : "Pendiente"}
                        </p>
                        <button onClick={() => editarTarea(elemento.id)}>
                            Editar
                        </button>
                    </div>
                )
            })}
        </div>
    )

    function editarTarea(id){
        setTareas(tareas.map((elemento) => {
            if (elemento.id === id){
                return {...elemento, titulo: "Tarea editada"}
            } else {
                return elemento
            }
        }))
    }
}

export default EditarTituloTareas