class Menu extends React.Component {
  render() {
    return React.createElement('ul', { className: 'menu' },
      React.createElement('li', null, 'Inicio'),
      React.createElement('li', null, 'Quienes Somos'),
      React.createElement('li', null, 'FAQ'),
    );
  }
}