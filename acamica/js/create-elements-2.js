var app = React.createElement('div', null,
  React.createElement('h1', null, 'Mi Sitio - Pagina 1'),
  React.createElement('ul', { className: 'menu' },
    React.createElement('li', null, 'Inicio'),
    React.createElement('li', null, 'Quienes Somos'),
    React.createElement('li', null, 'FAQ'),
  ),
);


//Creo funciones que retornan un elemento de react
function Encabezado(props) {
  return React.createElement(
    'h1', 
    null, 
    'Mi Sitio - ' + props.nombrePagina
  );
}

function Menu() {
  return React.createElement('ul', { className: 'menu' },
    React.createElement('li', null, 'Inicio'),
    React.createElement('li', null, 'Quienes Somos'),
    React.createElement('li', null, 'FAQ'),
  )
}

function Contenido(props) {
  return React.createElement(
    'div', 
    {className: 'contenido'}, 
    props.children
  );
}

// paso esas funciones y las pops que lo definen
var app = React.createElement('div', null,
  React.createElement(Encabezado, { nombrePagina: 'Pagina 1'}),
  React.createElement(Menu),
  React.createElement(Contenido, null,
    React.createElement('p', null, 'Mi contenido')
  )
);