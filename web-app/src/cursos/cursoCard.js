import React from 'react';
import FavoritarBtn from '../shared/favoritarBtn';

export class CursoCard extends React.Component {
    render() {
        return <article className="course presencial">
        <div className="card">
            <img className="responsive-img" src={this.props.thumb} alt="logo curso"/>
            <div className="card-block">
                <time className="card-date">{this.props.dataCurso}</time>
                <h4 className="card-title">{this.props.nome}</h4>
                <p className="card-text">{this.props.categoria}</p>
                <FavoritarBtn label="Favoritar" />
            </div>
        </div>
      </article>
    }
}
// exemplo de class props default
CursoCard.defaultProps = {
    nome: 'Treinamento'
}