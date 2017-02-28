

class Comp extends React.Component {
 // componente proximo a montarse
 componentWillMount() {
   // preparar los datos del estado local, en base a this.props.
   // o datos iniciales
   // ya esta disponible this.setState({ });
 }

 // ya esta montado, acceso a refs
 componentDidMount() {
   ...
 }

// lo necesario al momento de desmontar
// destruir listener o plugins instanciados
  componentWillUnmount() {
   ...
 }

}

