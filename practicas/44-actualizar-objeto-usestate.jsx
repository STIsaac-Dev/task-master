import { useState } from "react";

function TareaInteractiva(){
    const [tarea, setTarea] = useState({
        titulo : "Aprender React",
        completada : false
    })

    function completarTarea(){
        setTarea({...tarea,
            completada : true} )
    }

    return (
        <>
            <h2>
                Titulo: {tarea.titulo}
            </h2>
            <button onClick={completarTarea}>
                Completar tarea
            </button>
            <p>
                {tarea.completada ? "Completada" : "Pendiente"}
            </p>
        </>
    )
}

export default TareaInteractiva