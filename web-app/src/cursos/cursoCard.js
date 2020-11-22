import React from 'react';
import FavoritarBtnComEstado from '../shared/favoritarBtnComEstado';
import propTypes from 'prop-types';

export class CursoCard extends React.Component {
    render() {

        let listaRequisitos = this.props.requisitos.map((requisito, index) =>
            <li key={index}>{requisito}</li>
        )

        return <article className="course presencial">
        <div className="card">
            <img className="responsive-img" src={this.props.thumb} alt="logo curso"/>
            <div className="card-block">
                <time className="card-date">{this.props.dataCurso}</time>
                <h4 className="card-title">{this.props.nome}</h4>
                <p className="card-text">{this.props.categoria}</p>
                <h5>Requisitos:</h5>
                <ul>{listaRequisitos}</ul>
                <FavoritarBtnComEstado label="Gostei" />
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