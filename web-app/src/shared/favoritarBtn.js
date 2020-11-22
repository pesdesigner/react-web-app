import React from 'react';

export default function FavoritarBtn(props){

    let contador = 0

    let callContador = () => {
        contador++
        console.log(contador)
    }

    return <button className="btn btn--like" onClick={callContador}>
            {props.label || 'Adicionar'} : {contador}
           </button>
}

