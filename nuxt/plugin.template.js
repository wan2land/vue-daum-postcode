
import Vue from "vue"
import VueDaumPostcode from "vue-daum-postcode"

const options = {}
<% if (options.name) { %>options.name = "<%= options.name %>"<% } %>
<% if (options.scriptURL) { %>options.scriptURL = "<%= options.scriptURL %>"<% } %>


Vue.use(VueDaumPostcode, options)
