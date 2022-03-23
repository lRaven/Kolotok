import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import NotFound from '../views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,

		meta: {
			title: 'hto',
		}
	},

	{
		path: '/404',
		name: '404',
		component: NotFound,
		meta: {
			title: '404',
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	},

]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
