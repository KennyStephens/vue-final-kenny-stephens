<template>
  <div class="container">
    <h1 class="is-size-1 has-text-centered has-text-weight-semibold">Your Favorite <span class="has-text-primary">NewYous!</span></h1>
    <hr> 
    <p class="has-text-centered has-text-weight-semibold is-size-5">Number of Favorites: <span>{{ numberOfFavs }}</span></p>
    <h1 v-if="noFavorites" class="is-size-2 has-text-centered has-text-weight-semibold">You currently don't have any favorites.</h1>
        <!-- ================================
        TRANSITIONS AND ANIMATIONS
        ================================= -->
        <transition-group name="list" tag="div" class="columns main-section is-multiline is-centered">  
        <div 
          v-for="(you, i) in retrievedData" 
          :key="i"
          class="column is-one-quarter box pb-3">
            <figure class="image ma-auto">
              <img 
                class="is-rounded mb-3"
                :src="you.picture.large">
            </figure>
            <div class="user-content">
              <p class="has-text-centered">Your New First Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.first.toUpperCase() }}</span></p>
              <p class="has-text-centered">Your New Last Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.last.toUpperCase() }}</span></p>
              <p class="has-text-centered">Your New Age: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.dob.age }}</span></p>
              <p class="has-text-centered">Your New Email: <br><span class="has-text-primary has-text-weight-semibold is-size-6">{{ you.email }}</span></p> 
              <a class="button is-success is-outlined is-block mb-3" @click="updatePurchased(i)"><i class="fas fa-dollar-sign mr-2"></i>PURCHASE</a>
              <span @click="deleteFavorited(i)"><i class="fas fa-user-minus is-pulled-right"></i></span>
            </div>
          </div>
        </transition-group> 
    </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    data() {
      return {
        retrievedData: [],
        noFavorites: true
      }
    },
    methods: {
      fetchLSData() {
        this.retrievedData = JSON.parse(localStorage.getItem('newYouData'));
        // console.log(this.retrievedData);
      },
      deleteFavorited(i) {
        this.retrievedData = JSON.parse(localStorage.getItem('newYouData'));
        // console.log(this.retrievedData)
        this.retrievedData.splice(i, 1);
        this.$store.state.value--;
        localStorage.setItem('newYouData', JSON.stringify(this.retrievedData));
        // console.log(this.retrievedData);
      },
      ...mapMutations([
        'ADD_FIRST_NAME',
        'ADD_LAST_NAME'
      ]),
      updatePurchased(i) {
        this.$store.commit('ADD_FIRST_NAME', this.retrievedData[i].name.first);
        this.$store.commit('ADD_LAST_NAME', this.retrievedData[i].name.last);
      }
    },
    beforeMount() {
      this.fetchLSData();
    },
    computed: {
      ...mapGetters([
        'numberOfFavs'
      ]),     
      // value() {
      //   return this.$store.state.value;
      // } 
    },
    watch: {
      retrievedData() {
        if (this.retrievedData.length > 0) {
          this.noFavorites = false;
        } else {
          this.noFavorites = true;
        }
      }
    }
  }
</script>

<style scoped>
.main-section .column {
  margin: 100px 10px 10px 10px;
}

figure {
  max-width: 150px;
}

figure img {
  box-shadow: 0px 3px 5px #666;
  position: relative;
  bottom: 90px;
}

.fa-star {
  cursor: pointer;
}

.user-content {
  margin-top: -70px;
}

.fa-user-minus {
  cursor: pointer;
}

.fa-user-minus:hover {
  color: red;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(15px);
}

</style>

