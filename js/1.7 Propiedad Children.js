//3er parametro
//2do parametro children:

class Grilla extends React.Component {
 render() {
    return React.createElement('div', null,
      this.props.children.map(function(elemento) {
        return React.createElement('div', null, elemento);
      })
    );
 }
}

var grilla = React.createElement(Grilla, null,
  React.createElement(Elemento, null, 'valor 1'),
  React.createElement(Elemento, null, 'valor 2'),
  React.createElement(Elemento, null, 'valor 3')
);

// pero..
var grilla = React.createElement(Grilla, null,
  React.createElement(Elemento, null, 'valor 1')
);
// un solo elemento en children, no es una lista, el map tira error
//para ello

class Grilla extends React.Component {
  render() {
    return React.createElement('div', null,
      React.Children.map(this.props.childen, function(elemento) {
            
      })
    );
  }
}


// parecido a map
React.Children.forEach(children, fn);

//otras, cantidad de childrens  
React.Children.count(children);


//resolved
class Notificacion extends React.Component {
    render(){
    	return React.createElement('div', { className: 'notificacion' },this.props.children)
    }
}

var app = React.createElement(
    'div', 
    null,
    React.createElement(
        Notificacion, 
        null,
        'Una gran notificacion ',
        React.createElement('a', { href: 'https://google.com' }, 'con un link')
    )
);

class Lista extends React.Component {
    render() {
        return React.createElement('ul', null,
                  React.Children.map(this.props.children, function(element){ 
          				return React.createElement('li', null, element);}
                                    )
                                  );
    }
}

// Debe funcionar con multiples hijos
var lista1 = React.createElement(
    Lista,
    null,
    'Un elemento',
    React.createElement('p', null, 'Otro elemento'),
    42
);
// Y tambien con un solo hijo
var lista2 = React.createElement(Lista, null, 'Un solo elemento');


// ejercicio
class LayoutHorizontal extends React.Component {
  render() {
    var cantidadDeChildren = React.Children.count(this.props.children);
    
    var children = React.Children.map(this.props.children, function(child) {
        var style = { width: (100 / cantidadDeChildren) + '%', float: 'left' };
      	return React.createElement('div', { style: { style } }, child);
    });

    return React.createElement('div', { style: { overflow: 'hidden' } }, children);
  }
}

var app = React.createElement(LayoutHorizontal, null,
  React.createElement('div', null, 'Contenido 1'),
  React.createElement('div', null, 'Contenido 2'),
  React.createElement('div', null, 'Contenido 3')
);