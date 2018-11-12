import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// let numOfFavorites = JSON.parse(localStorage.getItem('newYouData')).length;

export default new Vuex.Store({
  state: {
    value: numOfFavorites
  },
  // getters: {
  //   numberOfFavs: state => {
  //     let numberOfFavorites = JSON.parse(localStorage.getItem('newYouData'));
  //     state.value = numberOfFavorites.length;
  //     return state.value
  //   }
  // }
});
