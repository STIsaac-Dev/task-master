import { useState } from "react";

function AlternarEstadoTarea(){
    const [tareas, setTareas] = useState(
        [
            {
                id : 1,
                titulo : "Aprender JavaScript",
                completada : false
            },
            {
                id : 2,
                titulo : "Aprender React",
                completada : true
            },
            {
                id : 3,
                titulo : "Crear Task Master",
                completada : false
            }
        ]
    )

    return (
        <div>
            {tareas.map((elemento) => {
                return (
                    <div key={elemento.id}>
                        <p>
                            {elemento.titulo}
                        </p>
                        <p>
                            {elemento.completada ? "Completada" : "Pendiente"}
                        </p>
                        <button onClick={() => alternarEstado(elemento.id)}>
                            {elemento.completada ? "Reabrir" : "Completar"} 
                        </button>
                    </div>
                )
            })}
        </div>
    )

    function alternarEstado(id){
        setTareas(
            tareas.map((elemento) => {
                if (elemento.id === id){
                    return {...elemento, completada: !elemento.completada}
                } else {
                    return elemento
                }
            })
        )
    }
}