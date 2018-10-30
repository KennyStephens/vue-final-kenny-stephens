<template>
  <div class="about container">
    <h1 class="is-size-1 has-text-centered has-text-weight-semibold">Your Favorite <span class="has-text-primary">NewYous!</span></h1>
    <hr>
      <div class="columns main-section is-multiline is-centered">   
        <div 
          v-for="(you, i) in retrievedData" 
          :key="i.first"
          class="column is-one-quarter box">
            <figure class="image ma-auto">
              <img 
                class="is-rounded mb-3"
                :src="you.picture.large">
            </figure>
            <div class="user-content">
              <p class="has-text-centered">Your New First Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.first.toUpperCase() }}</span></p>
              <p class="has-text-centered">Your New Last Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.last.toUpperCase() }}</span></p>
              <p class="has-text-centered">Your New Age: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.dob.age }}</span></p>
              <p class="has-text-centered">Your New Email: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.email }}</span></p>  
              <span @click="deleteFavorited(i)"><i class="fas fa-user-minus is-pulled-right"></i></span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        retrievedData: []
      }
    },
    methods: {
      fetchLSData() {
        this.retrievedData = JSON.parse(localStorage.getItem('newYouData'));
        // console.log(this.retrievedData);
      },
      deleteFavorited(i) {
        this.retrievedData = JSON.parse(localStorage.getItem('newYouData'));
        this.retrievedData.splice(i, 1);
        localStorage.setItem('newYouData', JSON.stringify(this.retrievedData));
        // console.log(this.retrievedData);
      }
    },
    beforeMount() {
      this.fetchLSData();
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
</style>

