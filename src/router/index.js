import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import Apply from "../views/Apply";
import ConfirmEmail from "../views/ConfirmEmail";

const routes = [
	{
		path: "/",
		component: Login,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/apply",
		name: "Apply",
		component: Apply,
	},
	{
		path: "/confirmation",
		name: "ConfirmEmail",
		component: ConfirmEmail,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
