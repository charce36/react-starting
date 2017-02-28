//shouldComponentUpdate
class Comp extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // this.props y this.state todavia no cambiaron
    return true/false;
  }
}

// ejemplo
// no quiero renderizar si no varia la cantidad de decimales
class DecimalesPi extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.decimales !== nextProps.decimales;
  }
  render() {
    return <span>
	{calcDecimalesPi(this.props.decimales)}
    </span>;
  }
}

// cada vez que se vaya a actualizar
// shouldComponentUpdate = true
class Comp extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    // this.props y this.state 
    // todavia no cambiaron
    ...
  }
}

//component didupdate
// ya se efectuo la actualización
class Comp extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    // this.props y this.state 
    // todavia no cambiaron
    ...
  }
  componentDidUpdate(prevProps, prevState) {
    // this.props y this.state 
    // ya cambiaron
    ...
  }
}

//ejemplo
class MapaGoogle extends React.Component {
  insertarMapa(el, opciones) { ... }
  actualizarMapa(el, opciones) { ... }
  quitarMapa(el) { ... }
  
  componentDidUpdate() {
    this.actualizarMapa(this.mapa, this.props.opciones);
  }

  componentDidMount() {
    this.insertarMapa(this.mapa, this.props.opciones);
  }

  componentWillUnmount() {
    this.quitarMapa(this.mapa);
  }

  render() {
    return <div ref={function(el) {
      this.mapa = el;
    }.bind(this)} />;
  }
}