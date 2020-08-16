import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './demos/SwitchDemo.vue'
import ButtonDemo from './demos/ButtonDemo.vue'
import DialogDemo from './demos/DialogDemo.vue'
import TabsDemo from './demos/TabsDemo.vue'


const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    },
  ]
})