import { LocalStorage } from "quasar";

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
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings);
  }
};

const actions = {
  changeTimeFormat({ commit, dispatch }, value) {
    commit("changeTimeFormat", value);
    // OPTION 1 : localStorage.setItem("timeFormat", value);
    // OPTION 2
    dispatch("saveSettings");
  },
  changeSingleList({ commit, dispatch }, value) {
    commit("changeSingleList", value);
    dispatch("saveSettings");
  },
  saveSettings({ state }) {
    LocalStorage.set("settings", state.settings);
  },
  getSettings({ commit }) {
    let settings = LocalStorage.getItem("settings");
    if (settings) {
      commit("setSettings", settings);
    }
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
