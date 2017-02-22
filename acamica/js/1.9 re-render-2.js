var cuenta = 0;

function render() {
  ReactDOM.render(
    React.createElement(Contador, {
      cuenta: cuenta,
      onIncrementar: function() {
        cuenta += 1;
        render();
      },
      onDecrementar: function() {
        cuenta -= 1;
        render();
      }
	}), 
    node
  );
}

var cuenta = 0;

function render() {
  // ...
}

render();

// desafio 1
var node = document.getElementById('content');
var todos = [];

function render() {
  ReactDOM.render(React.createElement(TodoList, {
    todos: todos,
    onAddTodo: function(todo) {
      todos.push(todo);
      render();
    }
  }), node);
}

render();

// desafio 2
var node = document.getElementById('content');

function render() {
  var date = new Date();
  ReactDOM.render(React.createElement('b', null, date), node);
}

setInterval(render, 1000);