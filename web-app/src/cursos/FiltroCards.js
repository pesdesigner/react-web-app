import style from './FiltroCards.module.css';
import React from 'react';

const FiltroCards = props => (
    <nav className={style.topbar__nav}>
        <button className={style.topbar__filter} onClick={() => props.resetaction()}>Todos</button>
        <button className={style.topbar__filter} onClick={() => props.action('design')}>Design</button>
        <button className={style.topbar__filter} onClick={() => props.action('desenvolvimento')}>Desenvolvimento</button>
    </nav>
)

export default FiltroCards;
