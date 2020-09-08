import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './demos/DocDemo.vue'
import SwitchDemo from './demos/SwitchDemo.vue'
import ButtonDemo from './demos/ButtonDemo.vue'
import DialogDemo from './demos/DialogDemo.vue'
import TabsDemo from './demos/TabsDemo.vue'
import RowAndColDemo from './demos/RowAndColDemo.vue'
import LayoutDemo from './demos/LayoutDemo.vue'


const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'grid', component: RowAndColDemo },
        { path: 'layout', component: LayoutDemo },
      ]
    },
  ]
})