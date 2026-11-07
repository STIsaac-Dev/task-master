import { useState } from "react";

function EstadoTarea(){
    const [completada, setCompletada] = useState(false)

    function cambiarEstado(){
        setCompletada(!completada)
    }

    return (
        <>
            <button onClick={cambiarEstado}>
                Cambiar estado
            </button>
            <p>
                {completada ? "Tarea completada" : "Tarea pendiente"}
            </p>
        </>
    )
}

export default EstadoTarea