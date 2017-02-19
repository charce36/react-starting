var titulo = React.createElement('h1', null, 'El titulo');
var p1 = React.createElement('p', null, 'Primer párrafo');

var link = React.createElement('a', {href: 'https://twitter.com'}, 'Ver más');
var p2 = React.createElement('p', { style: { 'font-size': '15px'} }, 'Segundo párrafo', link);

var app = React.createElement('div', null, titulo, p1, p2 );

ReactDOM.render(app, document.getElementById('content'));