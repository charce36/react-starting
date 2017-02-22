// hasta ahora renderizado statico
// interactivo que cambie en el timepo

class Contador extends React.Component {
  render() {
    return React.createElement('div', null,
      React.createElement('p', null, 'La cuenta actual es ', this.props.cuenta),
      React.createElement('input', {
        type: 'button',
        value: 'Incrementar',
        onClick: this.props.onIncrementar
      }),
      React.createElement('input', {
        type: 'button',
        value: 'Decrementar',
        onClick: this.props.onDecrementar
      })                         
    );
  }
}

// structure base
var node = document.getElementById('content');

ReactDOM.render(
  React.createElement(Contador, {
    cuenta: 0,
    onIncrementar: function() {},
    onDecrementar: function() {}
  }), 
  node
);

//funtion cuenta
// recibe por parametro el estado
function render(cuenta) {
  ReactDOM.render(
    React.createElement(Contador, {
      cuenta: cuenta,
      onIncrementar: function() {
        render(cuenta + 1);
      },
      onDecrementar: function() {
        render(cuenta - 1);
      }
    }), 
    node
  );
}

// la invoco
function render(cuenta) {
  // ...
}

render(0);

