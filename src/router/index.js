import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/PageHome.vue'),

		meta: { title: 'Колоток', },
	},
	{
		path: '/discount',
		name: 'Discount',
		component: () => import(/* webpackChunkName: "discount" */ '@/views/PageDiscount.vue'),

		meta: { title: 'Акции', },
	},
	{
		path: '/catalog',
		name: 'Catalog',
		component: () => import(/* webpackChunkName: "catalog" */ '@/views/PageCatalog.vue'),

		meta: { title: 'Каталог', },
	},
	{
		path: '/catalog/:category',
		name: 'Category',
		component: () => import(/* webpackChunkName: "category" */ '@/views/PageCategory.vue'),

		meta: { title: 'Категория', },
	},
	{
		path: '/catalog/:category/:subcategory',
		name: 'Subcategory',
		component: () => import(/* webpackChunkName: "subcategory" */ '@/views/PageSubcategory.vue'),

		meta: { title: 'Подкатегория', },
	},
	{
		path: '/catalog/:category/:subcategory/:id',
		name: 'Product',
		component: () => import(/* webpackChunkName: "product" */ '@/views/PageProduct.vue'),

		meta: { title: 'Товар', },
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "login" */ '@/views/PageLogin.vue'),

		meta: { title: 'Авторизация' }
	},
	//* cart page
	{
		path: '/cart',
		name: 'Cart',
		component: () => import(/* webpackChunkName: "cart" */ '@/views/PageCart.vue'),

		meta: { title: 'Корзина', },
	},

	{
		path: '/projects',
		name: 'Projects',
		component: () => import(/* webpackChunkName: "projects" */ '@/views/PageProjects.vue'),

		meta: { title: 'Проекты клиентов', },
	},

	//* 404 page
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import(/* webpackChunkName: "not_found" */ '@/views/Page404.vue'),

		meta: { title: '404', }
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
