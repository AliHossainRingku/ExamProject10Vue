<template>
    <the-header title="RememberMe"></the-header>
    <!--stored-resource :resources="storedResources"></stored-resource-->
    <the-resources></the-resources>
    <the-questions></the-questions>
    <the-form v-if="0"></the-form>
    <learning-survey></learning-survey>
    <user-experiences v-if="0"></user-experiences>

    <!--the-navigation></the-navigation>
    <users-list></users-list>
    <teams-list></teams-list>
    <team-members></team-members-->
</template>

<script>
//import StoredResource from './components/learning-resources/StoredResources.vue'
import TheHeader from './components/layouts/TheHeader.vue'
//import TheFooter from './components/layouts/TheFooter.vue'
import TheResources from './components/learning-resources/TheResources.vue'
import TheQuestions from './components/exam-resources/TheQuestions.vue'
import TheForm from './components/form-resources/TheForm.vue'
import LearningSurvey from './components/survey-resource/LearningSurvey.vue'
import UserExperiences from './components/survey-resource/UserExperiences.vue'

// import TheNavigation from './components/nav/TheNavigation.vue'
// import UsersList from './components/users/UsersList.vue'
// import TeamsList from './components/teams/TeamsList.vue'


export default {
    components: {
        //StoredResource, TheFooter,
        TheHeader,
        TheResources,
        TheQuestions,
        TheForm,
        LearningSurvey,
        UserExperiences,

        //This for Module 13 / router
        // TheNavigation,
        // UsersList,
        // TeamsList


    },
    //
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>