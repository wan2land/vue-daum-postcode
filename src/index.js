import VueDaumPostcode from "./vue-daum-postcode"

export function install(Vue, options) {
  options = options || {}

  const defaultscriptURL = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
  Vue.prototype.$scriptURL = options.scriptURL || defaultscriptURL
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
