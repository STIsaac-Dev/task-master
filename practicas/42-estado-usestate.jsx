import { useState } from "react";

function ContadorTareas() {
    const [contador, setContador] = useState(0)

    function aumentarContador() {
        setContador(contador + 1)


    }

    return (<><button onClick={aumentarContador}>
        Aumentar
    </button><p>
            Contador : {contador}
        </p></>)
}

export default ContadorTareas