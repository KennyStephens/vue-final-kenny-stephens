<template>
  <div class="section intro-questions has-background-info box">
        <p class="is-size-2 has-text-centered has-text-light has-text-weight-semibold">{{ introQuestions[questionCounter].question}}</p>
        <p class="label">{{ introQuestions[questionCounter].label }}</p>
        <input 
          class="input is-primary mb-4 first-name"
          v-if="questionCounter === 1 ? true : false" 
          type="text" 
          placeholder="First Name"
          v-model="questionAnswers.firstName">
        <input 
          class="input is-primary mb-4 last-name"
          v-if="questionCounter === 2 ? true : false"  
          type="text" 
          placeholder="Last Name"
          v-model="questionAnswers.lastName">
     <a class="button is-primary is-block has-text-centered" @click="changeQuestion">
       <span>NEXT</span>
    <span class="icon">
      <i class="fas fa-arrow-circle-right"></i>
    </span>
    
  </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introQuestions: [
        {question: 'Welcome to NewYou! Please answer a couple of questions before we get started.'},
        {question: 'What is your first name?', label: 'First Name'},
        {question: 'What is your last name?', label: 'Last Name'},
        {question: 'Thanks!'}
      ],
      questionCounter: 0,
      questionAnswers: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    
    changeQuestion() {
      if(this.questionCounter < this.introQuestions.length -1) {
        this.questionCounter++;
        
      } else {
       this.$emit('questionAnswers', this.questionAnswers);
       document.querySelector('.intro-questions').style.display = 'none';
     }
     
 
    }
  }
}
</script>

<style scoped>
  .intro-questions {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .95;
    width: 600px
  }
</style>


