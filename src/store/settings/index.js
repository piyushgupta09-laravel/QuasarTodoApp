const state = {
  settings: {
    timeFormat: false,
    singleList: false
  }
};

const mutations = {
  changeTimeFormat(state, value) {
    state.settings.timeFormat = value;
  },
  changeSingleList(state, value) {
    state.settings.singleList = value;
  }
};

const actions = {
  changeTimeFormat({ commit }, value) {
    commit("changeTimeFormat", value);
  },
  changeSingleList({ commit }, value) {
    commit("changeSingleList", value);
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
