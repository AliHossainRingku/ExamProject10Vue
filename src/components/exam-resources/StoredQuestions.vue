<template>
    <ul>
        <sample-question 
        v-for="ques in questions" :key="ques.id" 
        :id="ques.id"
        :question="ques.question" 
        :optionA="ques.optionA"
        :optionB="ques.optionB"
        :optionC="ques.optionC"
        :optionD="ques.optionD"
        :optionAnswer="ques.optionAnswer"
        :note="ques.note"
        ></sample-question>
    </ul>
</template>

<script>
import SampleQuestion from './SampleQuestion.vue'
export default {
    inject: ['questions','answerVisibles'],
    components: {
        SampleQuestion
    },
    
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>