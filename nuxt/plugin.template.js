
import Vue from 'vue'
import VueDaumPostcode from 'vue-daum-postcode'

const options = {}
<% if (options.name) { %>options.name = '<%= options.name %>'<% } %>
<% if (options.scriptUrl) { %>options.scriptUrl = '<%= options.scriptUrl %>'<% } %>


Vue.use(VueDaumPostcode, options)
