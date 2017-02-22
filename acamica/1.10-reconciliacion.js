// cuando renderizamos por primera vez
// react recorre todo el arbol de componentes
// plasma en el dom
// va a recordar tmb los componentes que fueron ejecutados par agenera rla ui
// y recuerda el estado
// cuando queramos renderizar nuevamente, react inica el proceso de  "reconciliacion"

// simula que la app se carga toda de nuevo aplicando los cambios

// tiene 2 conceptos  importante
// simula que se carga de nuevo
// no destruye lo que estaba en el dom (textos en inputs por ejemplo)

// esto lo hace recorriendo los arboles que guardo
// si hay difrencias en el arbol, remueve y agrega
// si hay diferencias en atributos, remplaza
// un ejemplo de las props es style
// su hay dfirencias de listas, inserta un solo nodo
