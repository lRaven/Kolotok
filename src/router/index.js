import { createRouter, createWebHashHistory } from 'vue-router'
import cookies from 'vue-cookies'

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
		path: '/catalog/:category/:subcategory/:product',
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
	{
		path: '/registration',
		name: 'Registration',
		component: () => import(/* webpackChunkName: "registration" */ '@/views/PageRegistration.vue'),

		meta: { title: 'Регистрация' }
	},
	{
		path: '/cabinet',
		name: 'Cabinet',
		component: () => import(/* webpackChunkName: "cabinet" */ '@/views/PageCabinet.vue'),
		redirect: { name: 'Profile' },

		children: [
			{
				path: 'profile',
				name: 'Profile',
				component: () => import(/* webpackChunkName: "profile" */ '@/views/CabinetPages/PageProfile.vue'),


				meta: {
					title: 'Профиль',
					requiresAuth: true,
				}
			},
			{
				path: 'cart',
				name: 'CartCabinet',
				component: () => import(/* webpackChunkName: "cart_cabinet" */ '@/views/CabinetPages/PageCartCabinet.vue'),


				meta: {
					title: 'Корзина',
					requiresAuth: true,
				}
			},
		],

		meta: {
			title: 'Личный кабинет',
			requiresAuth: true,
		}
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
	history: createWebHashHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach((to) => {
	window.scrollTo(0, 0);

	if (to.meta.requiresAuth) {
		if (cookies.get('auth_token')) return true
		else return { name: 'Login' }
	}
	else return true
})

export default router
