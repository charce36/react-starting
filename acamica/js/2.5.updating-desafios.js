//01
class Valor extends React.Component {
  constructor(){
    super();
  	this.setState({ comparacion: null });
  }
  
  componentWillReceiveProps(nextProps){
  	let mival = nextProps.valor;
    
    this.setState({ comparacion: mival - this.props.valor });
  }
  
  render() {
    var comparacion = this.state.comparacion;
    var texto;
    if (comparacion === null) {
      texto = '';
    } else if (comparacion > 0) {
      texto = '(incrementandose con respecto al anterior)';
    } else if (comparacion < 0) {
      texto = '(decrementandose con respecto al anterior)'
    } else { // comparacion === 0
      texto = '(manteniendose con respecto al anterior)'
    }
    return <div>
      El valor actual es {this.props.valor} {texto}
    </div>;
  }
}
//02
class Suma extends React.Component {
  shouldComponentUpdate(nextProps){
    return (this.props.valor1 !== nextProps.valor1) && 
      	(this.props.valor2 !== nextProps.valor2);
  }
  render() {
    return <span>La suma es {this.props.valor1 + this.props.valor2}</span>;
  }
}

//03
class Resaltar extends React.Component {
  componentDidUpdate(){
  	resaltar(this.node);
  }
  render() {
    return <div ref={function(ref) { this.node = ref; }.bind(this)}>
      {this.props.children}
    </div>;
  }
}