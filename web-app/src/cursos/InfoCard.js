import style from './InfoCard.module.css';
import React from 'react';

import { Tags } from '../shared/Tags';

export const InfoCard = (props) => {
    return <React.Fragment>
        <h4 className={style.title}>{props.nome}</h4>
    <p>{props.categoria} - Vagas : {props.vagas}</p>
    {props.requisitos.length > 0 &&
        <Tags label="Requisitos" tags={props.requisitos} />
    }
    </React.Fragment>
}