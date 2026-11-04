function calcularTareasPendientes(totalTareas, tareasCompletadas){
    let tareasPendientes = totalTareas - tareasCompletadas
    return tareasPendientes
}

console.log(calcularTareasPendientes(10, 4))