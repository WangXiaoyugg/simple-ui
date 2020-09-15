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
import PopoverDemo from './demos/PopoverDemo.vue'
import CollapseDemo from './demos/CollapseDemo.vue'
import CascaderDemo from './demos/CascaderDemo.vue'
import PagerDemo from './demos/PagerDemo.vue'
import IconDemo from './demos/IconDemo.vue'
import InputDemo from './demos/InputDemo.vue'



const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'icon', component: IconDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'input', component: InputDemo },

        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'grid', component: RowAndColDemo },
        { path: 'layout', component: LayoutDemo },
        { path: 'popover', component: PopoverDemo },
        { path: 'collapse', component: CollapseDemo },
        { path: 'cascader', component: CascaderDemo },
        { path: 'pager', component: PagerDemo },

      ]
    },
  ]
})