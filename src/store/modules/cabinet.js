import cookies from "vue-cookies";
import axios from "axios";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const state = () => ({
	user: {},
	userAuth: null,

	tabs_user: [
		{ id: 1, icon: '/img/icons/cabinet/profile.svg', icon_selected: '/img/icons/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icons/cabinet/cart.svg', icon_selected: '/img/icons/cabinet/cart.svg', description: 'Корзина', tab: 'cart', link: { name: 'CartCabinet' } },
		{ id: 3, icon: '/img/icons/cabinet/orders.svg', icon_selected: '/img/icons/cabinet/orders-selected.svg', description: 'История заказов', tab: 'orders', link: { name: 'Orders' } },
		{ id: 4, icon: '/img/icons/cabinet/bonuses.svg', icon_selected: '/img/icons/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
	],
	tabs_admin: [
		{ id: 1, icon: '/img/icons/cabinet/profile.svg', icon_selected: '/img/icons/cabinet/profile-selected.svg', description: 'Мой профиль', tab: 'profile', link: { name: 'Profile' } },
		{ id: 2, icon: '/img/icons/cabinet/cart.svg', icon_selected: '/img/icons/cabinet/cart.svg', description: 'Корзина', tab: 'cart', link: { name: 'CartCabinet' } },
		{ id: 3, icon: '/img/icons/cabinet/orders.svg', icon_selected: '/img/icons/cabinet/orders-selected.svg', description: 'История заказов', tab: 'orders', link: { name: 'Orders' } },
		{ id: 4, icon: '/img/icons/cabinet/bonuses.svg', icon_selected: '/img/icons/cabinet/bonuses-selected.svg', description: 'Бонусы', tab: 'bonuses', link: { name: 'Bonuses' } },
	],
})

const getters = {
	token() {
		if (cookies.get('auth_token')) return cookies.get('auth_token')
		else return null
	}
}

const mutations = {
	setUserData: (state, payload) => state.user = payload,
	setUserId: (state, payload) => state.user.id = payload,

	setUserAuth: (state, payload) => state.userAuth = payload,

	clearUserData: (state) => state.user = {},
}

const actions = {
	getUserData: async (context) => {
		try {
			const response = await axios.get(`${baseURL}/auth/users/me`, {
				headers: { Authorization: `token ${cookies.get('auth_token')}` },
			})

			if (response.status === 200) {
				context.commit("setUserData", response.data);
				context.commit("setUserAuth", true);
				context.dispatch('getUserId');
			}
			else {
				//* clear cookies, cabinet data
				cookies.remove('auth_token');

				context.commit("setUserAuth", false);
				context.dispatch('clearCabinetState');
			}

			return response;
		}
		catch (err) {
			//* clear cookies, cabinet data
			cookies.remove('auth_token');

			context.dispatch('clearCabinetState');

			throw new Error(err);
		}
	},

	getUserId: async (context) => {
		try {
			const response = await axios
				.get(`${baseURL}/auth/users/`, {
					headers: { Authorization: `token ${cookies.get('auth_token')}` },
				})
			if (response.status === 200) {
				const userMe = response.data.find(user => user.username === context.state.user.username)
				context.commit("setUserId", userMe.id);
			}
		}
		catch (err) { throw new Error(err) }
	},

	clearCabinetState({ commit }) {
		commit('clearUserData');
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
