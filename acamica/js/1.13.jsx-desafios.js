//Desafio 01
class App extends React.Component {
  render() {
    return(
      <div className='aplicacion'>
        	Hola mundo!
        	<p>Esto es un parrafo
              <a href='http://google.com'> con un link</a>
            </p>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('content'));

//Desafio 02
let className = 'menu';
var app = React.createElement('ul',  { className: className } ,
              React.createElement('li', null, 'Elemento 1'),
              React.createElement('li', {style: {backgroundColor: 'red'}}, 'Elemento 2'),
              React.createElement('li', {style: {backgroundColor: 'yellow'}}, 'Elemento 3'),
              React.createElement('li', {style: {backgroundColor: 'blue'}}, 'Elemento 4')
);


//Desafio 03
class MenuItem extends React.Component {
  render() {
    if(this.props.activo)
    	return(<a href={this.props.href}><b>{this.props.titulo}</b></a>);
    else
      	return(<a href={this.props.href}><span>{this.props.titulo}</span></a>);
  }
}