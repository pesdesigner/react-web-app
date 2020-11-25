import React from 'react';

export const BotaoInline = () => {
    const estilo = {
        backgroundColor: 'green',
        color: 'white',
        fontSize: '16px',
        padding: '1em',
        marginLeft: '1em',
        border: 'none'
    }

    return (
        <button style={estilo}>Meu botão Inline</button>
    )
}