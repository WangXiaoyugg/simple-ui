import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Garen from './components/Garen.vue'
import Garen2 from './components/Garen2.vue'


const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Garen },
    { path: '/xxx', component: Garen2 },

  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
