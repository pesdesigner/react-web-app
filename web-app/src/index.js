import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CursoCard}  from './cursos/cursoCard';

ReactDOM.render(
    <div className="listaCurso">
      <CursoCard
       thumb="./assets/img/javascript.jpg"
       dataCurso="30 Nov"
       nome="Javascript"
       categoria="20h de curso - Desenvolvimento"
       />
      <CursoCard
       thumb="./assets/img/typescript.jpg"
       dataCurso="10 Out"
       nome="Typescript"
       categoria="10h de curso - Desenvolvimento"
       />
    </div>,
    document.getElementById('root')
)
