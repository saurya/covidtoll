import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import LitepieDatePicker from 'litepie-datepicker';

const app = createApp(App)
app.use(LitepieDatePicker).use(router).mount('#app')
