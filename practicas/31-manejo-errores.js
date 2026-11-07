const contenidoJSON = '[{"titulo":"Aprender JavaScript","completada":false}]'
const contenidoJSON2 = '[{titulo:"Aprender JavaScript","completada":false}]'

try {
    const tareas = JSON.parse(contenidoJSON2)
    for (let i = 0; i < tareas.length; i++){
    console.log(`${tareas[i].titulo} - ${tareas[i].completada} `)
}
} catch (error) {
    console.log("Error al procesar el JSON")
    console.log(error.message)
}