import "./example.css";

import { createApp } from "vue";
import VueDaumPostcodePlugin from "vue-daum-postcode";

import Example from "./Example.vue";

const app = createApp(Example);

app.use(VueDaumPostcodePlugin);

app.mount("#app");
