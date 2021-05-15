import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import feed from './feed'
import './assets/tailwind.css'

export default {
  components: {
    feed 
  }
}

createApp(App).use(router).mount('#app')
