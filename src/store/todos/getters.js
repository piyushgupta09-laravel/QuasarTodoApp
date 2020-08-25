import todos from ".";

export default {
  todos: state => {
    return state.todos;
  },
  allTodos: state => {
    return state.todos;
  },
  filteredTodos: state => {
    let filtered = {};
    if (state.search) {
      Object.keys(state.todos).forEach(function(key) {
        let todo = state.todos[key];
        let titleLC = todo.title.toLowerCase();
        let queryLC = state.search.toLowerCase();
        if (titleLC.includes(queryLC)) {
          filtered[key] = todo;
        }
      });
      return filtered;
    } else {
      return state.todos;
    }
  },
  doneTodos: (state, getters) => {
    let filteredTodos = getters.filteredTodos;
    let todos = {};
    Object.keys(filteredTodos).forEach(function(key) {
      let todo = filteredTodos[key];
      if (todo.status) {
        todos[key] = todo;
      }
    });
    return todos;
  },
  pendTodos: (state, getters) => {
    let filteredTodos = getters.filteredTodos;
    let todos = {};
    Object.keys(filteredTodos).forEach(function(key) {
      let todo = filteredTodos[key];
      if (!todo.status) {
        todos[key] = todo;
      }
    });
    return todos;
  }
};
