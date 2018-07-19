
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"

const options = {}
<% if (options.name) { %>options.name = "<%= options.name %>"<% } %>

Vue.use(VueDaumPostcode, options)
