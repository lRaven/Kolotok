import { createRouter, createWebHashHistory } from 'vue-router'

import PageHome from '@/views/PageHome'
import Page404 from '@/views/Page404'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome,

		meta: {
			title: 'Колоток',
		},
	},
	{
		path: '/discount',
		name: 'Discount',

		component: () => import('@/views/PageDiscount'),

		meta: {
			title: 'Акции',
		},
	},
	{
		path: '/catalog',
		name: 'Catalog',

		component: () => import('@/views/PageCatalog'),

		meta: {
			title: 'Каталог',
		},
	},
	{
		path: '/catalog/:category',
		name: 'Category',

		component: () => import('@/views/PageCategory'),

		meta: {
			title: `Категория`,
		},
	},

	{
		path: '/catalog/:category/product/:id',
		name: 'Product',

		component: () => import('@/views/PageProduct'),

		meta: {
			title: 'Товар',
		},
	},

	//*cart page
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('@/views/PageCart'),

		meta: {
			title: 'Корзина',
		},
	},

	{
		path: '/projects',
		name: 'Projects',

		component: () => import('@/views/PageProjects'),

		meta: {
			title: 'Проекты клиентов',
		},
	},

	//*404
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: Page404,

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

export default router
