import { useState } from "react";

function ListaTareas() {
    const [tareas, setTareas] = useState([
        {
            id: 1,
            titulo: "Aprender JavaScript",
            completada: true
        },
        {
            id: 2,
            titulo: "Aprender React",
            completada: false
        },
        {
            id: 3,
            titulo: "Crear Task Master",
            completada: false
        }
    ])
    return tareas.map((elemento) => {
        return <div key={elemento.id}>
            
            <p>
                {elemento.titulo}
            </p>
            <p>
                {elemento.completada ? "Completada" : "Pendiente"}
            </p>
        </div>
    })
}

export default ListaTareas