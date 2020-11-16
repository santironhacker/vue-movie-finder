import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);
app.use(router);
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseSpinner', BaseSpinner);
app.mount('#app');
