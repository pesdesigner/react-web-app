import React from 'react';

export class BotaoInlineComEstado extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                backgroundColor: 'grey',
                width: '100%', // atributo ignorado
                marginTop: '1em'
            }
    }

    mudaEstado = () => {
        this.setState((estadoAnterior) => ({
            backgroundColor: estadoAnterior.backgroundColor === 'grey' ? 'red' : 'grey'
        }))
    }

    render() {
        return <button style={{backgroundColor: this.state.backgroundColor, marginTop: this.state.marginTop}} onClick={this.mudaEstado} className="btn">Botão com estilo dinâmico</button>
    }
}