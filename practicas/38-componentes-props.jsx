function Tarea(props){
    return (
        <div>
            <h3>
                {
                    props.titulo
                }
            </h3>
            <p>
                {
                    props.completada ? "Completada" : "Pendiente"
                }
            </p>
        </div>
    )
}

export default Tarea