// tags que simulan tags de html


// EJ 01
var el = <h1>Hola mundo</h1>;

//EJ 02
// PROPIEDADES
var el = React.createElement('a', { 
  href: 'https://google.com' 
}, 'Google');

// jsx
var el = <a href="https://google.com">
  Google
</a>;

//EJ 03
// PROPIEDADES NO STRINGS
var el = React.createElement('img', { 
  src: 'foto.png', 
  width: 200, 
  height: 200 
});

var el = <img 
  src="foto.png" width={200} height={200} />;

  //ej 03
  // variables seteando props
var className = 'carousel'; //variable
var imagenes = [
  React.createElement('img', { key: 1, src: 'foto1.png '}),
  React.createElement('img', { key: 2, src: 'foto2.png '}),
  React.createElement('img', { key: 3, src: 'foto3.png '})
];

var el = React.createElement('div', {
  className: className 
}, imagenes);

//jsx
var className = 'carousel';
var imagenes = [
  <img key={1} src="foto1.png" />,
  <img key={2} src="foto2.png" />,
  <img key={3} src="foto3.png" />
];
var el = <div className={className}>
  {imagenes}
</div>;

// minusculas elementos del DOM
<div /> //=> React.createElement('div')

// Mayus
<Foo /> //=> React.createElement(Foo)


//ej
var el = React.createElement(Modal, { 
  isOpen: true 
}, 'Contenido del modal!');

var el = <Modal isOpen={true}>
  Contenido del modal!
</Modal>;

//short form booleans properties
// default true
var el = <Modal isOpen>
  Contenido del modal!
</Modal>;
