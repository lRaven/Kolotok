import axios from "axios";
// import store from '@/store';
import cookies from "vue-cookies";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const state = () => ({
	cart: {}
})

const getters = {}

const mutations = {
	SET_CART: (state, payload) => state.cart = payload,

	SELECT_ALL_CART_ITEMS: state => {
		state.cart.forEach(item => item.selected = true);
	},
	SELECT_CART_ITEM: (state, payload) => {
		state.cart.forEach(item => {
			if (item.id === payload) { item.selected = true }
		})
	},

	UNSELECT_ALL_CART_ITEMS: state => {
		state.cart.forEach(item => item.selected = false);
	},
	UNSELECT_CART_ITEM: (state, payload) => {
		state.cart.forEach(item => {
			if (item.id === payload) { item.selected = false }
		})
	},

	SET_CART_ITEM_COUNT: (state, payload) => {
		state.cart.forEach(item => {
			if (item.id === payload.id) { item.count = payload.count }
		})
	},

	CLEAR_CART: (state) => state.cart = [],
}

const actions = {
	getCartList: async ({ commit }) => {
		try {
			const response = await axios(`${baseURL}/kolotok/orders/`, {
				headers: { Authorization: `token ${cookies.get('auth_token')}` }
			});

			if (response.status === 200) {
				commit('SET_CART', response.data[0]);
			}

			return response;
		}
		catch (err) { throw new Error(err) }
	},

	setShoppingList: (context, params) => {
		context.state.cart.forEach(product => {
			if (params.id === product.id) {
				product.quantity = Number(params.quantity);
			}
		});
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}