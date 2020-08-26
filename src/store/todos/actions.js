export default {
  todoCreate({ commit }, payload) {
    commit("todoCreate", payload);
  },
  todoUpdate({ commit }, payload) {
    commit("todoUpdate", payload);
  },
  todoDelete({ commit }, payload) {
    commit("todoDelete", payload);
  },
  setSearch({ commit }, query) {
    commit("setSearch", query);
  },
  setSort({ commit }, value) {
    commit("setSort", value);
  }
};
