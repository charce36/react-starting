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
);34