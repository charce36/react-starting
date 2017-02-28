class Menu extends React.Component {
  render() {
    return React.createElement('ul', { className: 'menu' },
      React.createElement('li', null, 'Inicio'),
      React.createElement('li', null, 'Quienes Somos'),
      React.createElement('li', null, 'FAQ'),
    );
  }
}

//ul es padre de li
//menu es dueño de ul y li