const tarea = {
    titulo : "Aprender JavaScript",
    completada : false,
    prioridad : 1
}
const {titulo, completada, prioridad} = tarea

console.log(titulo)
console.log(completada)
console.log(prioridad)

const categorias = [
    "Programación",
    "Diseño",
    "Productividad"
]

const [primero, segundo, tercero] = categorias
console.log(primero)
console.log(segundo)
console.log(tercero)