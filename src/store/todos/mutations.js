import Vue from "vue";
export default {
  todoCreate(state, payload) {
    Vue.set(state.todos, payload.id, payload.todo);
  },
  todoUpdate(state, payload) {
    Object.assign(state.todos[payload.id], payload.updates);
  },
  todoDelete(state, payload) {
    Vue.delete(state.todos, payload.id);
  },
  setSearch(state, query) {
    state.search = query;
  }
};
