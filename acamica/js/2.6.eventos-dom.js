<input type="text" onChange={function(ev) {
  console.log(ev);
}} />

<div onMouseOver={function (ev) {
  console.log(ev);
}} />

// desafio 01

class OpcionMenu extends React.Component {
  constructor() {
    super();
    this.state = { tieneTooltip: false };
  }
  
  mostrarTooltip(){
    if(!this.state.tieneTooltip)
      this.setState({ tieneTooltip: true});
  }
  
  esconderTooltip(){
    if(this.state.tieneTooltip)
      this.setState({ tieneTooltip: false});
  }
  
  render() {
    return <div
      style={{ position: 'relative' }}
      onMouseOver={this.mostrarTooltip}
      onMouseOut={this.esconderTooltip}
    >
      <a href={this.props.href}>
        {this.props.titulo}
      </a>
      {this.state.tieneTooltip && <Tooltip>{this.props.textoTooltip}</Tooltip>}
    </div>;
  }
}


// desafio 02
class EspejoEnMayusculas extends React.Component {
  constructor() {
    super();
    this.state = { textoEnMayusculas: '' };
    this.transformarTexto = this.transformarTexto.bind(this);
  }
  
  transformarTexto(e){
    let text = e.target.value.toUpperCase();
  	this.setState({ textoEnMayusculas: text});
  }
  
  render() {
    return <div>
      <input type="text" onChange={this.transformarTexto} />
      {this.state.textoEnMayusculas}
    </div>;
  }
}