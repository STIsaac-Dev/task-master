const prioridades = [1, 2, 3, 1, 2, 3]

for (let i = 0; i < prioridades.length; i++){
    if (prioridades[i] === 1){
        console.log("Prioridad alta")
    } else if (prioridades[i] === 2){
        console.log("Prioridad media")
    } else {
        console.log("Prioridad baja")
    }
}