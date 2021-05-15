import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import feed from './feed'
import memorialform from './memorial-form'
import explanation from './explanation'
import './assets/tailwind.css'

const app = createApp(App)
app.component('feed', feed)
app.component('memorial-form', memorialform)
app.component('explanation', explanation)
app.use(router).mount('#app')
