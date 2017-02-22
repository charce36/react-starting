var Encabezado = React.createClass({
  render: function() {
    return React.createElement(
      'h1',
      null, 
      'Mi Sitio - ' + this.props.nombrePagina
    );
  }
});