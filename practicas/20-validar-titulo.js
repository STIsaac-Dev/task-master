function validarTitulo(titulo){
    if (titulo.trim() === ""){
        return false
    } else{
        return true
    }
}

console.log(validarTitulo("Aprender JavaScript"))
console.log(validarTitulo(""))
console.log(validarTitulo("     "))