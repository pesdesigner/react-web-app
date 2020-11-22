import React from 'react';
import ReactDOM from 'react-dom';

let tituloLista = 'Cursos Recentes'

const dadosCurso = [
  {nome: 'React', categoria: 'Desenvolvimento'},
  {nome: 'Javascript', categoria: 'Desenvolvimento Web'},
  {nome: 'TypeScript', categoria: 'Desenvolvimento'},
]

function listaCursos() {
  let saida = []
  dadosCurso.forEach(item => {
  saida.push(<li>{item.nome} - {item.categoria}</li>)
  })
  return saida
}

const markup = 
    <section>
        <h1>{tituloLista}</h1>
        <ul>
          {listaCursos()}
        </ul>
    </section>

const teste = React.createElement(
  'h2', {className: 'teste'}, 'H2 criado com createElement'
)

ReactDOM.render(
    markup,
    document.getElementById('root')
)
