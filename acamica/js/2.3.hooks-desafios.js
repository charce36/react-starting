//01
class InputConFoco extends React.Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    return <input
      type="text"
      ref={function(input) { this.input = input; }.bind(this)}
    />;
  }
}

//02
class ClickeableAfuera extends React.Component {
   constructor() {
    super();
    this.handleDocumentClick = 		this.handleDocumentClick.bind(this);
  }
  
  handleDocumentClick = (e) => {
    e.preventDefault();
   
      this.clickAfuera();
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  contiene(el) {
    return this.div.contains(el);
  }

  clickAfuera() {
    	this.props.onClickAfuera();
  }

  render() {
    return <div ref={function(el) { this.div = el; }.bind(this)}>
      Hola, haz click afuera!
    </div>;
  }
}

//03
class FechaYHoraActual extends React.Component {
  constructor() {
    super();
    this.state = { ahora: new Date() };
    this.varInterval;
  }

  componentDidMount() {
    this.varInterval = setInterval(function(){
    	this.setInterval({ahora: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.varInterval);
  }

  render() {
    return <div>La fecha actual es: {this.state.ahora.toString()}</div>;
  }
}
