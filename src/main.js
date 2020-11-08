import { createApp } from 'vue';
//import { createRouter } from 'vue-router';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);


// import TeamsList from './components/teams/TeamsList.vue';

 

// const router = createRouter({
    
//     routes: [
//         { path: '/teams', component: TeamsList }
//     ]
// });

// app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
