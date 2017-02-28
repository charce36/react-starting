// desde abajo hacia arriba
// en js una funcion es un valor
// se lo puede pasar por props
// esto sirve para comunicar al duaño del componente que algo sucedio en el hijo
// esto se conoce como callback props

// un input, recibe en sus props los eventos, tal como el onClick
React.createElement('input', {
  onClick: function(ev) {
    console.log('Hice click!');
  },
  value: 'Guardar'
});

//pero puedo crear mis propias props callbacks
// componente BotonGuardar
// 
class BotonGuardar extends React.Component {
  render() {
    return React.createElement('button', {
      type: 'button',
      onClick: function(ev) {
        if (this.props.habilitado) {
          this.props.onClick(ev);
        }
      }.bind(this)
    }, 'Guardar');
  }
}

// renderizar algo 
class Lista extends React.Component {
  render() {
    var elementos = this.props.elementos.map(function(elemento) {
      return React.createElement(Elemento, { elemento: elemento });
    });

    if (elementos.length === 0) {
      elementos = this.props.renderSinResultados()
    }
    return React.createElement('div', null,
      elementos
    );
  }
}