//this.state
//estado interno de los componentes

//solo legacy y class
//no como funciones (conocidos como stateless)

//setState, una cola que react decide cuando cambiar el estado
class Toggle extends React.Component {
  constructor(props) {
    super(); //constructor de la case que hereda
    this.state = { activo: true }; //objeto key value
  }
  handleClick(ev) {
    this.setState({ 
      activo: !this.state.activo 
    });
  }
  render() {
    return React.createElement('div', {
      onClick: this.handleClick.bind(this)
    },
      'Activo: ',
      this.state.activo ? 'Si' : 'No'
    );
  }
}


//segundo parametro de setState
// se ejecuta cuando se setea el nuevo estado
this.setState(nuevoEstado, function() {
  // Aqui this.state ya esta actualizado
});
// Aqui this.state no necesariamente esta
// actualizado

// cada vez que se actualiza state, se renderea el arbol o subarbol

// se aconseja solo usar props