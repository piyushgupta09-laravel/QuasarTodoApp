import todos from ".";

export default {
  todos: state => {
    return state.todos;
  },
  allTodos: state => {
    return state.todos;
  },
  doneTodos: state => {
    let todos = {};
    Object.keys(state.todos).forEach(function(key) {
      let todo = state.todos[key];
      if (todo.status) {
        todos[key] = todo;
      }
    });
    return todos;
  },
  pendTodos: state => {
    let todos = {};
    Object.keys(state.todos).forEach(function(key) {
      let todo = state.todos[key];
      if (!todo.status) {
        todos[key] = todo;
      }
    });
    return todos;
  }
};
