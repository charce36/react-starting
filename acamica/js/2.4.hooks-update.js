// hooks cuando actualzo
//WillReceiveProps
// se va a disparar cuando estemos re-renderizando el componente desde el owner
// nos pasa nuevas props
// la primera vez que se renderize, se llama "componentwillmount"


class Comp extends React.Component {
  componentWillReceiveProps(nextProps) {
    // this.props todavia no cambiaron
    ...
  }    
}


// un ejemplo
class Temperatura extends React.Component {
  constructor(props) {
    super();
    this.state = {
      actualizando: false,
      temperatura: 0
    }
  }
  componentWillMount() {
    this.actualizarTemperatura(this.props.ciudad);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.ciudad !== nextProps.ciudad) {
      this.actualizarTemperatura(nextProps.ciudad);
    }
  }
  actualizarTemperatura(ciudad) {
    this.setState({ actualizando: true });
    obtenerTemperatura(ciudad, function(temperatura) {
      if (ciudad === this.props.ciudad) {
        this.setState({ actualizando: false, temperatura: temperatura })
      }
    }.bind(this));
  }
  render() {
    if (this.state.actualizando) {
      return <span>
        Actualizando temperatura para
        {this.props.ciudad}
      </span>;
    }
    return <span>
      {this.state.temperatura} grados en
      {this.props.ciudad}
    </span>;
  }
}