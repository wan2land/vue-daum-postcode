
import VueDaumPostcode from "./vue-daum-postcode.vue"

export function install(Vue, options) {
  options = options || {}
  Vue.component(options.name || "vue-daum-postcode", VueDaumPostcode)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  VueDaumPostcode,
}

export default {
  install,
}
