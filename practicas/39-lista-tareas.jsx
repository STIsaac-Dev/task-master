import Tarea from "./38-componentes-props";
const tareas = [
    {
        titulo: "Aprender JavaScript",
        completada: true
    },
    {
        titulo: "Crear Task Master",
        completada: false
    },
    {
        titulo: "Aprender React",
        completada: false
    }
]

function ListaTareas() {
    return (tareas.map((elemento) => {
        return <Tarea key={elemento.titulo} titulo={elemento.titulo} completada={elemento.completada} />
    })
    )
}

export default ListaTareas