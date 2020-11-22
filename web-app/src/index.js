import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CursoCard}  from './cursos/cursoCard';

const requisitosCurso = ['Lógica de programação', 'HTML']

ReactDOM.render(
    <div className="listaCurso">
      <CursoCard
       thumb="./assets/img/javascript.jpg"
       dataCurso="30 Nov"
       nome="Javascript"
       categoria="20h de curso - Desenvolvimento"
       requisitos={requisitosCurso}
       />
      <CursoCard
       thumb="./assets/img/typescript.jpg"
       dataCurso="10 Out"
       nome="Typescript"
       categoria="10h de curso - Desenvolvimento"
       requisitos={requisitosCurso}
       />
    </div>,
    document.getElementById('root')
)
