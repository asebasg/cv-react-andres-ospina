import React from "react";

export default function Idioma({idioma}) {
    if (!idioma || idioma.length === 0) {
        return (
            <section>
                <h3>Idiomas</h3>
                <p>No hay otros idiomas.</p>
            </section>
        );
    }
    return (
        <section>
            <h3>Idiomas</h3>
            <ul>
                {idioma.map(({id, nombre, nivel}) => (
                    <li key={id}>
                        {nombre} <em>{nivel}</em>
                    </li>
                ))}
            </ul>
        </section>
    )
}