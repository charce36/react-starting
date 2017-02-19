function Tab(props){
  return React.createElement('li', { className: props.activo ? 'tab tab-activo' : 'tab'},
          React.createElement('a', { href: props.href }, props.nombre)
          );
}

var app = React.createElement('ul', null,
            React.createElement(Tab, {activo: false, href: '#inicio', nombre: 'Inicio'}),
            React.createElement(Tab, {activo: true, href: '#quienes-somos', nombre: 'Quienes Somos'}),
            React.createElement(Tab, {activo: false, href: '#faq', nombre: 'FAQ'})
          );
