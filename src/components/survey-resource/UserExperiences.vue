<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //===========props, No longer needed if i use fetch for server side but for browse rside=============
  //props: ['results'],
  components: {
    SurveyResult,
  },

  //Added extra data func for serverside fetch [part]
  data(){
    return{
      results: []
    }
  },
  methods: {
    loadExperiences(){
      fetch('http://vue-http-demo-4234,firebase.com/surveys.json').then(
        (response)=>{
          if(response.ok){
            return response.json()
          }
        }
      ).then((data)=>{
        const results = [];
        for(const id in data){
          results.push({ id: id, name: data[id].name, rating: data[id].rating })
        }
        this.results = results
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>