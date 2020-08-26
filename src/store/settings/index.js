const state = {
  settings: {
    timeFormat: true
  }
};

const mutations = {
  changeTimeFormat(state, value) {
    state.settings.timeFormat = value;
  }
};

const actions = {
  changeTimeFormat({ commit }, value) {
    commit("changeTimeFormat", value);
  }
};

const getters = {
  settings: state => {
    return state.settings;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
