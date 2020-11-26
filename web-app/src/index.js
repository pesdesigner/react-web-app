import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { CursoCard}  from './cursos/CursoCard';

const requisitosCurso = ['Lógica de programação', 'HTML']
const requisitosDesign = ['Windows', 'Fotografia básica']

ReactDOM.render(
    <div className="listaCurso">
      <CursoCard
       thumb="./assets/img/javascript.jpg"
       dataCurso="30 Nov"
       nome="Lógica de programação"
       categoria="20h de curso - Desenvolvimento"
       vagas="30"
       favoritos="10"
       />
      <CursoCard
       thumb="./assets/img/typescript.jpg"
       dataCurso="10 Out"
       nome="Typescript"
       categoria="10h de curso - Desenvolvimento"
       requisitos={requisitosCurso}
       vagas="15"
       />
      <CursoCard
       thumb="./assets/img/photoshop.jpg"
       dataCurso="5 Ago"
       nome="Photoshop"
       categoria="35h de curso - Design"
       requisitos={requisitosDesign}
       />
    </div>,
    document.getElementById('root')
)
