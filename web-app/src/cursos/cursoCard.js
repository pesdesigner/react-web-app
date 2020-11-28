import estiloModulo from './CursoCard.module.css'
import React from 'react';
import propTypes from 'prop-types';
import CardBtn from '../shared/CardBtn';
import { InfoCard } from './InfoCard'
import { FormInscricao } from './FormInscricao';

export class CursoCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favoritos: this.props.favoritos,
            vagas: this.props.vagas,
            toggleForm: false,
            inscricoes: []
        }
    }

    clickFavoritar = () => {
        this.setState((estadoAnterior) => ({
            favoritos: ++estadoAnterior.favoritos
        }))
    }

    clickInscricao = () => {
        this.setState((estadoAnterior) => ({
            toggleForm: !estadoAnterior.toggleForm
        }))
    }

    enviarFormulario = (evento, estadoForm) => {
        console.log(evento, estadoForm)
        evento.preventDefault()
        this.setState((estadoAnterior) => ({
            toggleForm: !estadoAnterior.toggleForm,
            vagas: --estadoAnterior.vagas,
            inscricoes: [...estadoAnterior.inscricoes, estadoForm]
        }))
    }

    showContent = () => {
        if(this.state.toggleForm){
            return <FormInscricao enviar={this.enviarFormulario}/>
            } else {
            return <InfoCard vagas={this.state.vagas}
                    requisitos={this.props.requisitos}
                    nome={this.props.nome}
                    categoria={this.props.categoria} />    
            }
    }

    render() {
        return <article className={estiloModulo.card}>
        <div className={estiloModulo.card__img}>
            <img className={estiloModulo.card__img} src={this.props.thumb} alt={this.props.alt}/>
            <div className={estiloModulo.card__block}>
                <time className={estiloModulo.card__date}>{this.props.dataCurso}</time>
                {this.showContent()}
                <ul>
            {this.state.inscricoes.map(item => <li>{item.nome}</li>)}
                </ul>
            </div>
            <div>
                <footer className={estiloModulo.card__footer}>
                    <CardBtn contador={this.state.favoritos} label="Gostei" action={this.clickFavoritar} />
                    <CardBtn label="Inscrever-se" tipoBtn="inscrever"
                    action={this.clickInscricao} />
                </footer>
            </div>
        </div>
      </article>
    }
}
// exemplo de class props default
CursoCard.defaultProps = {
    nome: 'Treinamento',
    requisitos: [],
    vagas: 10,
    favoritos: 0
}

CursoCard.propTypes = {
    requisitos: propTypes.array,
    nome: propTypes.string,
    categoria: propTypes.string
}