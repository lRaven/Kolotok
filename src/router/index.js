import { createRouter, createWebHashHistory } from 'vue-router'

import store from '@/store'

const routes = [
	//*homepage
	{
		path: '/',
		name: 'rLayout',
		component: () => import('@/views/PageHome'),

		meta: {
			title: 'Колоток',
		},
	},
	{
		path: '/catalog',
		name: 'catalog',

		component: () => import('@/views/PageCatalog'),

		meta: {
			title: 'Каталог',
		},
	},
	{
		path: '/catalog/:category',
		name: 'category',

		component: () => import('@/views/PageCategory'),

		meta: {
			// TODO:добавить в vuex переменные для динамических заголовков
			title: '*название категории*',
		},
	},

	{
		path: '/catalog/:category/product/:id',
		name: 'product',

		component: () => import('@/views/PageProduct'),

		meta: {
			// TODO:добавить в vuex переменные для динамических заголовков
			title: '*название товара*',
		},
	},

	//*cart page
	{
		path: '/cart',
		name: 'cart',
		component: () => import('@/views/PageCart'),

		meta: {
			title: 'Корзина',
		},
	},

	//* 404
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/Page404'),

		meta: {
			title: '404',
		}
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
