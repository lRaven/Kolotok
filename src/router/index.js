import { createRouter, createWebHashHistory } from 'vue-router'
import PageHome from '../views/PageHome'

import Page404 from '../views/Page404'

import store from '../store';

const routes = [
	{
		path: '/',
		name: 'home',
		component: PageHome,

		meta: {
			title: 'Колоток',
		}
	},

	{
		path: '/404',
		name: '404',
		component: Page404,
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
	store.dispatch('setCategories');
})

export default router
