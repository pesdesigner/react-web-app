import React from 'react';

export default class FavoritarBtnComEstado extends React.Component {
    constructor(props) {
        super(props)
        this.state = {contador: 0}
        this.callContador = this.callContador.bind(this)
    }

    callContador (e) {
        console.log(e.currentTarget)
        e.stopPropagation()
        this.setState((estadoAnterior) => ({contador: ++estadoAnterior.contador}))
    }

    render() {
        return <button className="btn btn--like" onClick={this.callContador} >
            {this.props.label || 'Adicionar'} : {this.state.contador}
       </button>
    }
}

    
