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

// renderizar elementos
// si no tiene elemntos "delega" al componente superior que hacer invocando a una funcion

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


var app = React.createElement(Lista, {
  elementos: [],
  renderSinResultados: function () {
    return React.createElement(
      'p', 
      null, 
      'No hay resultados'
    );
  }
});


//Desafio 1
class Foo extends React.Component {
  render() {
    return React.createElement('input', {
      type: 'button',
      value: 'Clickeame',
      onClick: function(ev){console.log('Click!');}
    });
  }
}

//Desafio 2
class PopOver extends React.Component {
  render() {
    let element = null;
    if(this.props.isOpen)
      element = this.props.renderContent();

	return React.createElement('div', { className: 'popOver' }, element );
  }
}

var app = React.createElement(PopOver, {
  isOpen: true,
  renderContent: function() {
    return React.createElement('div', null, 'Hola soy el contenido del popover!');
  }
});