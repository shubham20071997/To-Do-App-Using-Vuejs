import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "bootstrap/dist/css/bootstrap.css";
createApp(App).use(router).mount("#app");
import "bootstrap/dist/js/bootstrap.js";
import setAuthHeader from "./utils/setAuthHeader";

// if (localStorage.jwtToken) {
//   setAuthHeader(localStorage.jwtToken);
// } else {
//   setAuthHeader(false);
// }
