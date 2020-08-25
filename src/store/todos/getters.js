import todos from ".";

export default {
  todos: state => {
    return state.todos;
  },
  allTodos: state => {
    return state.todos;
  },
  sortedTodos: state => {
    let sortedTodos = {};
    let keysOrdered = Object.keys(state.todos);

    keysOrdered.sort((a, b) => {
      let taskAProp = state.todos[a][state.sort].toLowerCase();
      let taskBProp = state.todos[b][state.sort].toLowerCase();

      if (taskAProp > taskBProp) return 1;
      else if (taskAProp < taskBProp) return -1;
      else return 0;
    });

    keysOrdered.forEach(key => {
      sortedTodos[key] = state.todos[key];
    });

    return sortedTodos;
  },
  filteredTodos: (state, getters) => {
    let sortedTodos = getters.sortedTodos;
    let filteredTodos = {};
    if (state.search) {
      Object.keys(sortedTodos).forEach(function(key) {
        let todo = sortedTodos[key];
        let titleLC = todo.title.toLowerCase();
        let queryLC = state.search.toLowerCase();
        if (titleLC.includes(queryLC)) {
          filteredTodos[key] = todo;
        }
      });
      return filteredTodos;
    } else {
      return sortedTodos;
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
