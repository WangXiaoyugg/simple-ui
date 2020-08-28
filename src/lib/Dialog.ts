import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'
export const openDialog = (options) => {
  const { title, content, ok, cancel, overlayClosable = true } = options
  const wrapper = document.createElement('div')
  document.body.appendChild(wrapper)
  const close = () => {
    app.unmount(wrapper)
    wrapper.remove()
  }
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        overlayClosable,
        "onUpdate:visible": (newVal) => {
          newVal === false && close()
        },
        ok,
        cancel,
      }, {
          title,
          content,
        })
    }
  })
  app.mount(wrapper)

}