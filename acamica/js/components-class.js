class Encabezado extends React.Component {
  render() {
    return React.createElement(
      'h1', 
      null, 
      'Mi Sitio - ' + this.props.nombrePagina
    );
  }
}

// Classes para definir componentes
// tiene que extender React.Component
// tiene que definir una funcion de render
// esta funcion tiene que devolver un createElement
// para acceder a props hay que acceder por this.props

class Notificacion extends React.Component{ 
              render() {
                return React.createElement('div', { className: 'caja' },
                  React.createElement(Icono, { tipo: this.props.icono }),
                  this.props.children
                );
              }
}


//cuando se llama a la funcion render

// no se tiene que modificar las props nunca
// react calcula en base a estas props y asume esto

class Boton extends React.Component {
  render() {
    if (!this.props.color) {
      this.props.color = 'blue'; // <-- NO !!!!!!!
    }
    
    return React.createElement('button', {
      style: { color: this.props.color } 
    }, this.props.texto);
  }
}

//SI 
class Boton extends React.Component {
  render() {
    var color = this.props.color;
    
    if (!color) { color = 'blue'; }
    
    return React.createElement('button', {
      style: { color: color }
    }, this.props.texto);
  }
}
