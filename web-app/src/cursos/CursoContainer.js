import style from './CursoContainer.module.css';
import style2 from '../index.module.css';

import axios from 'axios';
import React from 'react';

import { CursoCard } from './CursoCard';
// import { FiltroCards } from './FiltroCards';

export default class CursoContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            carregou: false,
            cursos: [],
            cursosBackup: [],
            error: null,
            filtroAtual: this.props.filtro,
        }
        this.filtrarCards = this.filtrarCards.bind(this)
        this.limparFiltro = this.limparFiltro.bind(this)
    }

    componentDidMount(){
        this.axiosCall();
    }

    axiosCall(){
        axios.get('http://localhost:3000/assets/data/dados.json')
        .then(
            result => {
                this.setState({
                    carregou: true,
                    cursos: result.data.cursos,
                    cursosBackup: result.data.cursos
                })
            },
            error => {
                this.setState({
                    carregou: true,
                    error
                })
            }
        )
    } 

    busca(dados, categoria){
        const consulta = (categoria) ?
        dados.filter(item => (item.categoria === categoria)):dados;
        return consulta
    }

    filtrarCards(categoria){
        this.setState({
            cursos: this.busca(this.state.cursosBackup, categoria),
            filtroAtual: categoria
        })
    }

    limparFiltro(){
        this.setState({
            cursos: this.state.cursosBackup,
            filtroAtual: null
        })
    }

    render (){
        const {error, carregou, cursos} = this.state

        if(error){
            return <div className={style.error}>{error.message}</div>
        }

        if(carregou){
            return <section>
                <nav className={style.filtro}>
                    {this.props.filtro && <div>Filtrado por: {this.props.filtro}</div>}
                </nav>
                <div className={style2.listaCurso}>
                {this.busca(cursos,this.props.filtro).map((curso, index) => (
                    <CursoCard key={index} thumb={curso.thumb}
                    dataCurso={curso.dataCurso}
                    nome={curso.nome}
                    categoria={curso.categoria}
                    vagas={curso.vagas}
                    />
                )
            )} 
            </div>
            </section>
        } else {
            return <div className={style.lds__ripple}><div></div><div></div></div>

        }
    }
}