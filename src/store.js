import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const estado = {
  word: "",
};

const mutations = {
  DEFINE_SEARCH_WORD(state, { word }) {
    state.word = word;
  },
};

const actions = {
  defineSearchWord({ commit }, word) {
    commit("DEFINE_SEARCH_WORD", {
      word: word,
    });
  },
};

export default new createStore({
  state: estado,
  mutations,
  actions,
  plugins: [createPersistedState()],
});
