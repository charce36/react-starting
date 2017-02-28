class MapaGoogle extends React.Component {
  insertarMapa(el) { ... }
  quitarMapa(el) { ... }
}


class MapaGoogle extends React.Component {
  insertarMapa(el) { ... }
  quitarMapa(el) { ... }
  componentDidMount() {
    this.insertarMapa(this.mapa);
  }
  componentWillUnmount() {
    this.quitarMapa(this.mapa);
  }
  render() {
    return <div ref={function(el) { 
      this.mapa = el; 
    }.bind(this)} />;
  }  

  