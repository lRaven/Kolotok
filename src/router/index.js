import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import NotFound from '../views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,

		meta: {
			title: 'Колоток',
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


//* переход к странице с координатами x: 0, y: 0
router.beforeEach(() => {
	window.scrollTo(0, 0);
})

export default router
