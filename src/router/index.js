import Vue from "vue";
import VueRouter from "vue-router";
import {Home} from "@/views/";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: async () => {
			const {About} = await import(/* webpackChunkName: "about" */ "@/views/");
			return About;
		}
	},
	{
		path: "/create",
		name: "Create",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: async () => {
			const {Create} = await import(/* webpackChunkName: "create" */ "@/views/");
			return Create;
		}
	},
	{
		path: "/details/:id",
		name: "Details",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: async () => {
			const {Details} = await import(/* webpackChunkName: "create" */ "@/views/");
			return Details;
		}
	}
];

const router = new VueRouter({
	mode: "history",
  routes
})

export default router
