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