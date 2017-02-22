//Desafio 1
class Contador extends React.Component {
  constructor() {
    super();
    this.state.valor = 0;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({valor: this.state.valor + 1});
  }

  render() {
    return React.createElement('div', null,
      //? contador,
      React.createElement('button', { onClick: this.handleClick }, 'Incrementar')
    );
  }
}

// Desafio 2
class FechaActual extends React.Component {
  this.state = {fechaActual: new Date()};
  constructor() {
    super();

    setInterval(function() {
      this.setState({fechaActual: new Date()})
    }.bind(this), 1000);
  }

  render() {
    return React.createElement('div', null,
      'La fecha actual es: ',
      new Date()
    );
  }
}


// Desafio 3
class ResumenListado extends React.Component {
  constructor() {
    super();

    this.filtrosPosibles = {
      completos: function(item) {
        return item.completo;
      },
      borrados: function(item) {
        return item.borrado;
      },
    };
    var filtro = this.filtrosPosibles.completos;
    this.state = {
      filtro: 'completos',
      items: []
    };
  }

  cambiarFiltro(nombreFiltro) {
    return function() {
      var filtro = this.filtrosPosibles[nombreFiltro];
      this.setState({
        filtro: nombreFiltro,
      });
    }.bind(this);

  }

  calculaCantFilt() {
    var filtro = this.filtrosPosibles[this.state.filtro];
    return this.state.items.filter(filtro).length;
  }

  calculaItems() {
    return this.state.items.length;
  }

  render() {
    var filt = this.calculaCantFilt();
    var itms = this.calculaItems();
    return React.createElement('div', null,
      'Tienes ',
      itms,
      ' elementos y ',
      filt,
      ' filtrados.',
      React.createElement('br'),
      React.createElement('button', {
        className: 'btn btn-primary',
        onClick: this.cambiarFiltro('completos')
      }, 'Cantidad completos'),
      React.createElement('button', {
        className: 'btn btn-secondary',
        onClick: this.cambiarFiltro('borrados')
      }, 'Cantidad borrados')
    );
  }
}