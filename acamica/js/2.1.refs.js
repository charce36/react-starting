//desafio 01
class Formulario extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.onSubmit(/* ? */);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <label>
        Nombre
        <input type="text" ref={/* ? */} />
      </label>
      <button type="submit">Guardar</button>
    </form>;
  }
}

//desafio 02
class Ejemplo extends React.Component {
  constructor() {
    super();
    this.state = { height: 0 };
  }

  render() {
    return <div>
    	<img
      	src="http://facebook.github.io/react/img/logo.svg"
      	ref={function(img) {
          if (!img) return;
          // ?
        }.bind(this)}
      />
      <div style={{ 
           height: this.state.height, 
           backgroundColor: 'red' 
      }}>
        Tengo el mismo alto que la imagen!
      </div>
    </div>;
  }
}
