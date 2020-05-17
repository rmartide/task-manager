import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getTheme } from "@/services/localdata";
import '@/services/material';
import '@/ui-components/global';
import "./style.scss";

Vue.config.productionTip = false;
Vue.material.theming.theme = getTheme();

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount("#app");
