class App extends React.Component {
  render() {
    return React.createElement('div', null,
      React.createElement(
      	'h1', 
      	{className: 'titulo' + this.props.titulo},
      	this.props.titulo
      ),
      this.props.contenido ?
        React.createElement(
      	  Contenido, 
      	  {ancho: 1024, mostrarAds: true}, 
          this.props.contenido
        ) :
        React.createElement(SinContenido)
    );
  }
}


function TextoNoMuyLargo(props) {
  var text = props.texto;
  
  if(text > 5) text = 'Demasiado largo';
 
  if (props.texto.length > 5) {
    props.texto = text;
  }
  return React.createElement('span', null, props.texto);
}

var app = React.createElement('div', null,
  React.createElement(TextoNoMuyLargo, { texto: 'Hola' }),
  React.createElement(TextoNoMuyLargo, { texto: 'Hola que tal' })
);

class Contador extends React.Component {
  render() {
    var cantidad = this.props.cantidad;
    var color = "yellow";
    
    if(cantidad < 5)
      	color = "green";
    
    return React.createElement('span', {style:{ backgroundColor: color }}, this.props.cantidad);
  }
}
var app = React.createElement('div', null,
  React.createElement(Contador, { cantidad: 4 }),
  React.createElement(Contador, { cantidad: 8 }),
  React.createElement(Contador, { cantidad: 5 })
);

function BotonPeligro(props) {
  var customStyle = { backgroundColor: 'red', color: 'white' };
  return React.createElement('button', {style: customStyle});
}