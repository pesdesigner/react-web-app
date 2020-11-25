import estiloModulo from './cursoCard.module.css'
import React from 'react';
import FavoritarBtnComEstado from '../shared/favoritarBtnComEstado';
import propTypes from 'prop-types';
import { BotaoInline } from '../shared/BotaoInline';
import { BotaoInlineComEstado } from '../shared/BotaoInlineComEstado';

export class CursoCard extends React.Component {
    render() {

        let listaRequisitos = this.props.requisitos.map((requisito, index) =>
            <li className={estiloModulo.card__tags__item} key={index}>{requisito}</li>
        )

        const clickCard = e => {
            console.log(e.currentTarget)
        }

        return <article className={estiloModulo.card} onClick={clickCard}>
        <div className={estiloModulo.card__img}>
            <img className={estiloModulo.card__img} src={this.props.thumb} alt={this.props.alt}/>
            <div className={estiloModulo.card__block}>
                <time className={estiloModulo.card__date}>{this.props.dataCurso}</time>
                <h4 className={estiloModulo.card__title}>{this.props.nome}</h4>
                <p className={estiloModulo.card__text}>{this.props.categoria}</p>
                <h5 className={estiloModulo.card_subtitle}>Requisitos:</h5>
                <ul className={estiloModulo.card_tags}>{listaRequisitos}</ul>              
            </div>
            <div>
                <footer className={estiloModulo.card__footer}>
                    <FavoritarBtnComEstado label="Gostei" />
                    <BotaoInline />
                    <BotaoInlineComEstado />
                </footer>
            </div>
        </div>
      </article>
    }
}
// exemplo de class props default
CursoCard.defaultProps = {
    nome: 'Treinamento'
}

CursoCard.propTypes = {
    requisitos: propTypes.array,
    nome: propTypes.string,
    categoria: propTypes.string
}