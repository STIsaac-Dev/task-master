import Tarea from "./38-componentes-props"

const tarea = {
    titulo: "Aprender React",
    completada: true
}

function DetalleTarea() {
    return <>
        <Tarea titulo={tarea.titulo} completada={tarea.completada} />{
            tarea.completada ? "¡Tarea completada!" : "Tarea pendiente"
        }

    </>
}

export default DetalleTarea