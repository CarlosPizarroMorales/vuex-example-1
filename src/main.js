import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// versión básica, sin nada, ni vuex ni vue-router
// createApp(App).mount('#app')

// versión solo con vue-router
// createApp(App).use(router).mount('#app')


