<template>
  <div class="container">
    <transition name="slide-fade">
      <div 
        v-show="addedToFavorites"
        class="has-background-success add-to-favorites">
        <h1 class="has-text-light has-text-centered has-text-weight-bold is-size-3">Added to Favorites!</h1>
      </div>
    </transition>
    <div class="columns">
      <div class="column">
        <div class="field results">
          <label class="label">Number of Results Requested</label>
            <div class="control">
              <input class="input is-primary" type="number" placeholder="Put Number Here" value="3">
            </div>
        </div>
      </div>
    </div>
  <button 
      class="button is-block is-success mb-5 is-large ma-auto" 
      @click="newYouGen"
      v-if="!loadingAnimation">Generate the NewYou!</button>
      <transition name="fade">
      <div v-if="loadingAnimation">
          <h1 class="title has-text-centered mb-0">GENERATING...</h1>
          <img 
              src="../assets/loader.gif" 
              alt="Loading Animation" 
              class="image ma-auto pa-2 mb-5 is-128x128">
      </div>
      </transition>
        <transition-group 
          name="list" 
          tag="div" 
          class="columns main-section is-multiline is-centered">   
          <div 
            v-for="(you, i) in newYouData" 
            :key="i"
            class="column is-one-quarter box">
              <figure class="image ma-auto">
                <img 
                    class="is-rounded mb-3"
                    :src="you.picture.large"
                    v-shadow>
              </figure>
              <div class="user-content">
                <p class="has-text-centered">Your New First Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.first.toUpperCase() }}</span></p>
                <p class="has-text-centered">Your New Last Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.last.toUpperCase() }}</span></p>
                <p class="has-text-centered">Your New Age: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.dob.age }}</span></p>
                <p class="has-text-centered">Your New Email: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.email }}</span></p>  
                <span @click="favorited(i)"><i class="fas fa-star is-pulled-right"></i></span>
              </div>
          </div>
        </transition-group>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  data() {
    return {
      newYouData: [],
      loadingAnimation: false,
      gender: "",
      localStorageData: [],
      addedToFavorites: false
    };
  },
  created() {
    // console.log("created");
    eventBus.$on("genderAnswer", gender => {
      this.gender = gender;
      // console.log(this.gender);
    });
  },
  methods: {
    newYouGen() {
      let gender = this.gender.toLowerCase();
      let resultNumber = document.querySelector("input").value;

      this.loadingAnimation = true;
      setTimeout(() => {
        this.loadingAnimation = false;
        axios
          .get(
            `https://randomuser.me/api/?results=${resultNumber}&gender=${gender}`
          )
          .then(response => {
            this.newYouData = response.data.results;
            // console.log(this.newYouData);
          })
          .catch(error => {
            console.log(error);
          });
      }, 3000);
    },
    favorited(i) {
      // console.log(i, event);
      event.target.style.color = 'gold';
      this.addedToFavorites = true;
      setTimeout(() => {
        this.addedToFavorites = false;
      },1500)
      

      if(localStorage.getItem('newYouData') === null) {
        this.localStorageData.push(this.newYouData[i]);
        localStorage.setItem('newYouData', JSON.stringify(this.localStorageData));
        // console.log(this.localStorageData);
      } else {
        this.localStorageData = JSON.parse(localStorage.getItem('newYouData'));
        this.localStorageData.push(this.newYouData[i]);
        localStorage.setItem('newYouData', JSON.stringify(this.localStorageData));
        // console.log(this.localStorageData);
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}

.main-section .column {
  margin: 100px 10px 10px 10px;
}

figure {
  max-width: 150px;
}

figure img {
  position: relative;
  bottom: 90px;
}

.fa-star {
  cursor: pointer;
}

.user-content {
  margin-top: -70px;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-to-favorites {
  max: 400px;
  border-radius: 9px;
  margin: 0 auto;
  padding: 10px 20px;
  opacity: .9;
  position: fixed;
  top: 200px;
  z-index: 99;
  left: 50%;
  transform: translate(-50%, -50%)
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

