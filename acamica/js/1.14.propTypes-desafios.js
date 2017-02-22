//Desafio 01
class Foto extends React.Component {
  render() {
    return <img
      src={this.props.urlFoto}
      alt={this.props.textoAlternativo}
      width={this.props.ancho}
      height={this.props.alto}
      onClick={this.props.onClick}
    />
  }
}

Foto.propTypes = {
  urlFoto: React.PropTypes.string.isRequired,
  textoAlternativo: React.PropTypes.string.isRequired,
  ancho: React.PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.number
]),
  alto: React.PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.number
]),
  onClick: React.PropTypes.func.isRequired
};

//Desafio 02
var propTypes = {
  tamanoBoton: React.PropTypes.oneOf(['pequeño', 'mediano', 'grande']).isRequired,
  children: React.PropTypes.node,
  item: React.PropTypes.shape({
          id: React.PropTypes.number.isRequired,
          nombre: React.PropTypes.string.isRequired,
    	  activo: React.PropTypes.bool
        }).isRequired
};
