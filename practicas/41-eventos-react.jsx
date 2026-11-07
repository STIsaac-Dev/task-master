function BotonTarea() {
    function completarTarea() {
        console.log("¡Has completado la tarea!")
    }

    return <button onClick={completarTarea}>
        Completar Tarea
    </button>
}

export default BotonTarea