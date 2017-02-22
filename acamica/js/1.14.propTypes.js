// function style
function Componente(props) {
  return // ...
}

Componente.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.bool.isRequired
};

// PropTypes
React.PropTypes.array
React.PropTypes.bool
React.PropTypes.func
React.PropTypes.number
React.PropTypes.object
React.PropTypes.string
React.PropTypes.element
React.PropTypes.instanceOf(CLASS)
// SOLO UNO DE ESOS VALORES
React.PropTypes.oneOf(['value 1', 'value 2'])

// UNO DE ESTOS TIPOS, NO DE OTROS
React.PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.number,
  React.PropTypes.instanceOf(Message)
])

// ARRAY DE NUMBERS
React.PropTypes.arrayOf(
  React.PropTypes.number
)

React.PropTypes.objectOf(
  React.PropTypes.number
)

// OBJETOS COMPLEJOS
React.PropTypes.shape({
  color: React.PropTypes.string,
  fontSize: React.PropTypes.number
})

React.PropTypes.any

// SI NINGUNO MATCHEA
// CUSTOM
function(props, propName, componentName) {
  if (!/matchme/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}


// MAS https://facebook.github.io/react/docs/typechecking-with-proptypes.html