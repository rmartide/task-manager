import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/services/material';
import '@/ui-components/global';
import "./style.scss";

Vue.config.productionTip = false;
Vue.material.theming.theme = 'kek';

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount("#app");
