import { createVueDaumPostcode } from './create-vue-daum-postcode'
import VueDaumPostcode from './vue-daum-postcode'

export function install(Vue, options = {}) {
  const { name, ...remainOptions } = options
  Vue.component(name || 'vue-daum-postcode', Object.keys(remainOptions).length > 0 ? createVueDaumPostcode(remainOptions) : VueDaumPostcode)
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
