import { createRouter, createWebHashHistory } from 'vue-router'
import PageHome from '../views/PageHome'
import PageProduct from '../views/PageProduct'

import Page404 from '../views/Page404'

import store from '../store';

const routes = [
	//*homepage
	{
		path: '/',
		name: 'home',
		component: PageHome,

		meta: {
			title: 'Колоток',
		}
	},

	//*dynamic product page
	{
		path: '/catalog/product',
		name: 'product',
		component: PageProduct,

		beforeEnter(from, to, next) {
			next();
		},
		meta: {
			title: 'Product'
		}
	},

	//*404
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
	store.dispatch('setProducts');
})

export default router
