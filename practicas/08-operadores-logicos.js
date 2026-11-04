const usuarioActivo = true
const tareaCompletada = false
const prioridad = 2

console.log(usuarioActivo && tareaCompletada)
console.log(usuarioActivo || tareaCompletada)
console.log(!tareaCompletada)
console.log(usuarioActivo && prioridad === 2)
console.log(tareaCompletada || prioridad === 1)