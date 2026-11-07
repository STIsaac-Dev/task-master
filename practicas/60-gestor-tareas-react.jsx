
import { useState } from "react";

function GestorTareasReact() {
    const [tareas, setTareas] = useState([
        {
            id: 1,
            titulo: "Aprender React",
            completada: false
        },
        {
            id: 2,
            titulo: "Aprender JavaScript",
            completada: false
        },
        {
            id: 3,
            titulo: "Crear Task Master",
            completada: false
        }
    ]);

    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [error, setError] = useState("");
    const [idEditando, setIdEditando] = useState(null);
    const [tituloEditado, setTituloEditado] = useState("");

    const existe = tareas.some(
        (elemento) =>
            elemento.titulo.trim().toLowerCase() ===
            nuevoTitulo.trim().toLowerCase()
    );

    return (
        <div>
            <h1>Task Master</h1>

            {/* Agregar tareas */}
            <input
                type="text"
                value={nuevoTitulo}
                placeholder="Escribe una tarea"
                onChange={(evento) => {
                    setNuevoTitulo(evento.target.value);
                    setError("");
                }}
            />

            <button onClick={agregarTarea}>
                Agregar tarea
            </button>

            {error !== "" && <p>{error}</p>}

            {/* Lista de tareas */}
            <div>
                {tareas.map((elemento) => (
                    <div key={elemento.id}>
                        {elemento.id === idEditando ? (
                            <>
                                <input
                                    type="text"
                                    value={tituloEditado}
                                    onChange={(evento) =>
                                        setTituloEditado(evento.target.value)
                                    }
                                />

                                <button
                                    onClick={() => guardarEdicion(elemento.id)}
                                >
                                    Guardar
                                </button>

                                <button onClick={cancelarEdicion}>
                                    Cancelar
                                </button>
                            </>
                        ) : (
                            <>
                                <h2>{elemento.titulo}</h2>

                                <p>
                                    {elemento.completada
                                        ? "Completada"
                                        : "Pendiente"}
                                </p>

                                <button
                                    onClick={() => alternarEstado(elemento.id)}
                                >
                                    {elemento.completada
                                        ? "Reabrir"
                                        : "Completar"}
                                </button>

                                <button
                                    onClick={() => editarTarea(elemento.id)}
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => eliminarTarea(elemento.id)}
                                >
                                    Eliminar tarea
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Contadores */}
            <div>
                <h2>Resumen de tareas</h2>

                <p>Cantidad de tareas: {tareas.length}</p>

                <p>
                    Tareas completadas:{" "}
                    {tareas.filter((elemento) => elemento.completada).length}
                </p>

                <p>
                    Tareas pendientes:{" "}
                    {tareas.filter((elemento) => !elemento.completada).length}
                </p>
            </div>
        </div>
    );

    // Agregar tarea
    function agregarTarea() {
        if (nuevoTitulo.trim() === "") {
            setError("Escribe un título para la tarea");
            return;
        }

        if (existe) {
            setError("Esta tarea ya existe");
            return;
        }

        setTareas([
            ...tareas,
            {
                id: Date.now(),
                titulo: nuevoTitulo.trim(),
                completada: false
            }
        ]);

        setNuevoTitulo("");
        setError("");
    }

    // Completar o reabrir tarea
    function alternarEstado(id) {
        setTareas(
            tareas.map((elemento) => {
                if (elemento.id === id) {
                    return {
                        ...elemento,
                        completada: !elemento.completada
                    };
                }

                return elemento;
            })
        );
    }

    // Activar modo edición
    function editarTarea(id) {
        const tareaSeleccionada = tareas.find(
            (elemento) => elemento.id === id
        );

        setIdEditando(id);
        setTituloEditado(tareaSeleccionada.titulo);
    }

    // Guardar edición
    function guardarEdicion(id) {
        if (tituloEditado.trim() === "") {
            setError("El título no puede estar vacío");
            return;
        }

        const tituloDuplicado = tareas.some(
            (elemento) =>
                elemento.id !== id &&
                elemento.titulo.trim().toLowerCase() ===
                tituloEditado.trim().toLowerCase()
        );

        if (tituloDuplicado) {
            setError("Ya existe una tarea con ese título");
            return;
        }

        setTareas(
            tareas.map((elemento) => {
                if (elemento.id === id) {
                    return {
                        ...elemento,
                        titulo: tituloEditado.trim()
                    };
                }

                return elemento;
            })
        );

        setIdEditando(null);
        setTituloEditado("");
        setError("");
    }

    // Cancelar edición
    function cancelarEdicion() {
        setIdEditando(null);
        setTituloEditado("");
        setError("");
    }

    // Eliminar tarea
    function eliminarTarea(id) {
        setTareas(
            tareas.filter((elemento) => elemento.id !== id)
        );
    }
}

export default GestorTareasReact;
