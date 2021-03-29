import './example.css'

import { createApp } from 'vue'
import VueDaumPostcode from 'vue-daum-postcode'

import Example from './Example.vue'


const app = createApp(Example)

app.use(VueDaumPostcode)

app.mount('#app')
