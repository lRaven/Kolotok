import { createRouter, createWebHashHistory } from 'vue-router'

import PageHome from '@/views/PageHome'
import PageCatalog from '@/views/PageCatalog'
import PageProduct from '@/views/PageProduct'
import PageCart from '@/views/PageCart'

import Page404 from '@/views/Page404'

import store from '@/store'

const routes = [
	//*homepage
	{
		path: '/',
		name: 'home',
		component: PageHome,

		meta: {
			title: 'Колоток',
		},
	},

	//*catalog page
	{
		path: '/catalog',
		name: 'catalog',
		// component: import
		component: PageCatalog,

		meta: {
			title: 'Каталог',
		},
	},

	//*dynamic product page
	{
		path: '/catalog/product/:id',
		name: 'product',
		component: PageProduct,

		meta: {
			title: 'Product',
		},
	},

	//*cart page
	{
		path: '/cart',
		name: 'cart',
		component: PageCart,

		meta: {
			title: 'Корзина',
		},
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
	routes,
	scrollBehavior() {
		return { top: 0 }
	}
})

router.beforeEach(() => {
	store.dispatch('setCategories');
	store.dispatch('setProducts');
})

export default router
