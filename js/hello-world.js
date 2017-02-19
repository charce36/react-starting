var app = React.createElement('h1', null, 'Hola mundo!');
// {
//   type: 'h1',
//   props: {
//	   children: 'Hola Mundo'
//   }
// }

//Render
ReactDOM.render(app, document.getElementById('content'));


//props en el createElement
React.createElement('img', { src: 'foo.png' });

//Se setea las propiedades de js no las del dom
React.createElement('p', { className: 'parrafo' }, 'Esto es un texto');

//objeto style ya que asi es en js
React.createElement('h1', { style: { color: 'red' } }, 'Hello world');


//el 3er parametro y mas, tienene que con el hijo
React.createElement('a', {
  href: 'http://google.com',
  style: { backgroundColor: 'red' }
}, 'Link a Google');

//3er puede ser string, object, array
var personas = ['Juan', 'Maria', 'Laura', 'German'];
var app = React.createElement('ul', null,
  personas.map(function(persona) {
    return React.createElement('li', null, persona);
  })
);
ReactDOM.render(app, document.getElementById('content'));


//CHILDERN COMO PROP
var app = React.createElement('h1', { children: 'Este es un texto' });
ReactDOM.render(app, document.getElementById('content'));