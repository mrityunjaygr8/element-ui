import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from "/src/components/HelloWorld.vue";
import Second from "/src/components/Second.vue";

const routes = [
		{path: "/", component: HelloWorld},
		{path: "/second", component: Second},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router;
