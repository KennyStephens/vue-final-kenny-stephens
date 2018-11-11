import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0
  },
  getters: {
    numberOfFavs: state => {
      let numberOfFavs = JSON.parse(localStorage.getItem('newYouData'));
      state.value = numberOfFavs.length;
      return state.value;
    }
  }
});
