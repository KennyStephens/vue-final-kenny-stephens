import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0,
    firstName: '',
    lastName: '',
  },
  getters: {
    numberOfFavs: state => {
      const numberOfFavorites = JSON.parse(localStorage.getItem('newYouData'));
      state.value = numberOfFavorites.length;
      return state.value
    },
    addFirstName: state => state.firstName,
    addLastName: state => state.lastName
  },
  mutations: {
    ADD_FIRST_NAME(state, name) {
      state.firstName = name;
    },
    ADD_LAST_NAME(state, name) {
      state.lastName = name;
    }
  }
});
