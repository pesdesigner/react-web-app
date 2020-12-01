import React from 'react';
import { CursoCard } from './CursoCard';
import style from './CursoContainer.module.css';
import axios from 'axios';

export default class CursoContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            carregou: false,
            cursos: [],
            error: null
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/assets/data/dados.json')
        .then(
            result => {
                this.setState({
                    carregou: true,
                    cursos: result.data.cursos
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

    fetchApiCall(){
        fetch('http://localhost:3000/assets/data/dados.json')
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    carregou: true,
                    cursos: result.cursos
                })
            },
            (error) => {
                this.setState({
                    carregou: true,
                    error
                })
            }
        )
    }

    render (){
        const {error, carregou, cursos} = this.state

        if(error){
            return <div className={style.error}>{error.message}</div>
        }

        if(carregou){
            return <div className="listaCurso">
                {cursos.map((curso, index) => (
                    <CursoCard key={index} thumb={curso.thumb}
                    dataCurso={curso.dataCurso}
                    nome={curso.nome}
                    categoria={curso.categoria}
                    vagas={curso.vagas}
                    />
                )
            )} 
            </div>
        } else {
            return <div className={style.lds__ripple}><div></div><div></div></div>

        }
    }
}