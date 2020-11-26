import React from 'react';

export default class CardBtn extends React.Component {

    render() {
        return <button onClick={this.props.action} className={`btn btn--${this.props.tipoBtn}`}>
            {this.props.label} : {this.props.contador > 1 && + this.props.contador}
        </button>
    }
}

CardBtn.defaultProps = {
    contador : '0',
    label: 'Adicionar',
    tipoBtn: 'like'
}
