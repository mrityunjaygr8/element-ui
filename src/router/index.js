import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from "/src/components/HelloWorld.vue";
import Second from "/src/components/Second.vue";
import Posts from "/src/components/Posts.vue";

const routes = [
		{path: "/", component: HelloWorld, name: "home"},
		{path: "/second", component: Second, name: "second"},
		{path: "/posts", component: Posts, name: "posts"},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router;
