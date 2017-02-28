//01
function soloDigitos(texto) {
  return texto.match(/^\d+$/);
}

class InputNumerico extends React.Component {
  handleChange(ev){
  	if(soloDigitos(ev.target.value))
      this.props.onChange(ev.target.value);
  }
  
  render() {
    return <input 
             type="text"
             value={this.props.value}
             onChange={this.handleChange.bind(this)} 
            />;
  }
}

//02
class FormularioLogin extends React.Component {
  constructor() {
    super();
    this.state =  {usuario: this.props.usuario, 
                   contrasena: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsuario = this.handleUsuario.bind(this);
    this.handleContrasena = this.handleContrasena.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.onSubmit({usuario: this.props.usuario, 
                         contrasena: this.props.contrasena});
  }
                        
	handleUsuario(ev) {
    	this.setState({ usuario: ev.target.value });
    }
    
    handleContrasena(ev){
    	this.setState({ contrasena: ev.target.value });
    }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        Usuario
        <input type="text" value={this.state.usuario} onChange={this.handleUsuario} />
      </label>
      <label>
        Contraseña
        <input type="password" value={this.state.usuario} onChange={this.handleUsuario} />
      </label>
      <button type="submit">Enviar</button>
    </form>;
  }
}

//03
class RadioButtonList extends React.Component {
  constructor(){
    super();
    this.handleOption = this.handleOption.bind(this);
  }
  
  handleOption(ev){
    ev.preventDefault();
    this.props.onChange(ev.target.value);
  }
  
  render() {
    return <div>
      {this.props.options.map(function (option) {
        let isSelected = this.props.selected === option;
        return <label key={option}>
          <input
            type="radio"
			onChange={ (ev) => this.props.onChange(ev.target.value) }
            checked={isSelected}
          />
          {option}
        </label>;
      }.bind(this))}
    </div>
  }
}
