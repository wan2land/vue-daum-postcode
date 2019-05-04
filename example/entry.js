
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"
import VueHighlightJS from "vue-highlightjs"

import App from "./app.vue"

Vue.use(VueDaumPostcode)
Vue.use(VueHighlightJS)

new Vue({
  el: "#app",
  render: h => h(App)
})
