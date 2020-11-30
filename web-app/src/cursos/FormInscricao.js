import style from './FormInscricao.module.css';
import React from 'react';

export class FormInscricao extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      nome: '',
      email: '',
      periodo: 'M',
      genero: 'Masculino',
      observacao: '',
      addObservacao: false,
    }
  }
updateEstado = (evento) => {
  const value = evento.target.type === 'checkbox' ? evento.target.checked : evento.target.value;
  this.setState({[evento.target.name]: value})
}

componentDidMount(){
  console.log('montou')
  if(this.props.promoTimer > 0){
    this.timerPromo = setInterval(() => this.props.decrementTimer(), 1000);
  }
}

componentWillUnmount(){
  clearInterval(this.timerPromo)
}

getFormattedTime(){
  let minutos = Math.floor(this.props.promoTimer/ 60);
  minutos = (minutos < 10 && '0') + minutos;
  let segundos = Math.floor(this.props.promoTimer%60);
  segundos = (segundos < 10 && '0') + segundos;
  return `${minutos}:${segundos}`;
}

  render() {
      return <form className={style.form} onSubmit={(evento) => this.props.enviar(evento, this.state)}>

      <h3 className={style.title}>Formulario de inscrição</h3>
      {this.props.promoTimer > 0 && 
      <p className={style.promo}>Não perca nossa promoção de <strong>20%</strong>: {this.getFormattedTime()}
        </p>}
  <label className={style.label}>Nome: {this.state.nome}</label>
      <input type="text" name="nome" value={this.state.nome} onChange={this.updateEstado} className={style.input} />
      
      <label className={style.label} >E-mail: {this.state.email}</label>
      <input type="text" name="email" value={this.state.email} onChange={this.updateEstado} className={style.input} />

      <label className={style.label} >Período: {this.state.periodo}</label>
      <select className={style.select}
        value={this.state.periodo}
        name="periodo"
        onChange={this.updateEstado}
      >
        <option value="Manhã" key="M">Manhã</option>
        <option value="Tarde" key="T">Tarde</option>
        <option value="Noite" key="N">Noite</option>
      </select>
  
  <label className={style.label}>Gênero: {this.state.genero}</label>
      <label className={style.radiobox}>
        Feminino:
        <input type="radio" 
          name="genero"
          checked={this.state.genero === "Feminino"}
          value="Feminino" onChange={this.updateEstado}
        />
      </label>

      <label className={style.radiobox}>
        Masculino:
        <input type="radio" 
          name="genero"
          checked={this.state.genero === "Masculino"}
          value="Masculino" onChange={this.updateEstado}
        />
      </label>

      <label className={style.check}>
        Adicionar observação?
        <input type="checkbox"
            name="addObservacao"
            checked={this.state.addObservacao}
            onChange={this.updateEstado}
        />
      </label>

      {this.state.addObservacao &&
        <textarea className={style.input}
        name="observacao"
        value={this.state.observacao}
        onChange={this.updateEstado}
        />    
      }

      <input type="submit" className={style.btn + ' btn'} value="Enviar" />  
    </form>
  }

}