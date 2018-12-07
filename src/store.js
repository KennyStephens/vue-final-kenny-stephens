import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0
  },
  mutations: {
    numberOfFavs: state => {
      const numberOfFavorites = JSON.parse(localStorage.getItem('newYouData'));
      state.value = numberOfFavorites.length;
    }
  }
});
