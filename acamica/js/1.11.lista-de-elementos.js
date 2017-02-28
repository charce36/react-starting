var itinerario = [
  { id: 1, ciudad: 'Barcelona', dias: 3 },
  { id: 2, ciudad: 'Madrid', dias: 5 },
  { id: 4, ciudad: 'Barcelona', dias: 2 },
  { id: 3, ciudad: 'Paris', dias: 2 }
];

var app = React.createElement('ul', null,
  itinerario.map(function(item) {
    return React.createElement('li', 
      { key: item.id },
      'Ciudad ', item.ciudad, ', quedándonos ', item.dias, ' días'
    );
  })
);


ReactDOM.render(app, document.getElementById('content'));


//Desafio 1
var lista = [
  { id: 1, nombre: 'Juan', edad: 24 },
  { id: 2, nombre: 'Laura', edad: 56 },
  { id: 3, nombre: 'Pablo', edad: 24 },
  { id: 4, nombre: 'Juan', edad: 41 }
];
var app = React.createElement('ul', null, lista.map(function(item) {
  return React.createElement('li', { key: item.id },
    item.nombre + ', ' + item.edad + ' años');
}));

// Desarfío 2
class FilaItem extends React.Component {
  render() {
    return React.createElement('p', null,
      item.descripcion + ' - $' + item.precio);
  }
}
var items = [
  { id: 1, descripcion: 'Jarra Plastico', precio: 15 },
  { id: 2, descripcion: 'Set de cubiertos', precio: 40 },
  { id: 3, descripcion: 'Platos x 3', precio: 87 },
];

var app = React.createElement('div', null, items.map(function(item) {
  return React.createElement(FilaItem, { item: item, key: item.id });
}));