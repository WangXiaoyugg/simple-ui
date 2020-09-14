let onDocumentClick = (e) => {
  let { target } = e;
  callbacks.forEach(item => {
    if (item.el === target || item.el.contains(target)) {
      return;
    } else {
      item.callback()
    }
  })
}
document.addEventListener('click', onDocumentClick)
let callbacks = [];
export default {
  mounted(el, binding, vnode) {
    callbacks.push({ el, callback: binding.value })
  }
}

export const removeDocumentClick = () => {
  document.removeEventListener('click', onDocumentClick)
}

