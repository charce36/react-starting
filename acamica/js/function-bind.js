// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

//Ejemplo rapido
var fn = function ( param1, param2 ) {
    console.info( this, param1, param2 );
}

var newFn = fn.bind( console, 'param1Fixed' );
 
fn( 'Hello', 'World' ); // Window Hello World
newFn( 'Goodbye', 'Lenin' ); // Object { /* console*/ } param1Fixed Goodbye

// Si pasamos como valor ‘undefined‘, éste es ignorado y el valor de this no se altera.
var newFnSameThis = fn.bind( undefined, 'param1Fixed' );