import './cursoCard.css'
import React from 'react';
import FavoritarBtnComEstado from '../shared/favoritarBtnComEstado';
import propTypes from 'prop-types';

export class CursoCard extends React.Component {
    render() {

        let listaRequisitos = this.props.requisitos.map((requisito, index) =>
            <li className="card__tags__item" key={index}>{requisito}</li>
        )

        const clickCard = e => {
            console.log(e.currentTarget)
        }

        return <article className="card" onClick={clickCard}>
        <div className="card__img">
            <img className="card__img" src={this.props.thumb} alt="logo curso"/>
            <div className="card__block">
                <time className="card__date">{this.props.dataCurso}</time>
                <h4 className="card__title">{this.props.nome}</h4>
                <p className="card__text">{this.props.categoria}</p>
                <h5 className="card_subtitle">Requisitos:</h5>
                <ul className="card_tags">{listaRequisitos}</ul>              
            </div>
            <div>
                <footer className="card__footer">
                    <FavoritarBtnComEstado label="Gostei" />
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