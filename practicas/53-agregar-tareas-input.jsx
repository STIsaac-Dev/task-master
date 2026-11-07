import { useState } from "react";

function AgregarTareasInput() {
    const [tareas, setTareas] = useState([])
    const [nuevoTitulo, setNuevoTitulo] = useState("")

    return (
        <div>
            <input type="text" value={nuevoTitulo} onChange={(evento) => setNuevoTitulo(evento.target.value)} />
            <button onClick={agregarTarea}>
                Agregar tarea
            </button>
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
                        </div>
                    )
                })}
            </div>
        </div>

    )

    function agregarTarea() {
        setTareas([...tareas, {
            id : Date.now(),
            titulo : nuevoTitulo,
            completada: false
        }])
        setNuevoTitulo("")
    }
}

export default AgregarTareasInput