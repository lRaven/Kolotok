import axios from "axios";
import cookies from "vue-cookies";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const state = () => ({ cart: {} })

const getters = {}

const mutations = {
	setCart: (state, payload) => state.cart = payload,

	//TODO: get product id, identification by name is unstable
	selectAllCartItems: state => {
		state.cart.products.forEach(item => item.selected = true);
	},
	selectCartItem: (state, payload) => {
		const find = state.cart.products.find(product => product.product.name === payload);
		if (find) { find.selected = true }
	},

	unselectAllCartItems: state => {
		state.cart.products.forEach(item => item.selected = false);
	},
	unselectCartItem: (state, payload) => {
		const find = state.cart.products.find(product => product.product.name === payload);
		if (find) { find.selected = false }
	},

	setCartItemCount: (state, payload) => {
		const find = state.cart.products.find(el => el.product.name === payload.name);

		if (find) {
			find.amount = payload.count
		}
	},

	removeCard: (state, payload) => {
		state.cart.products = state.cart.products.filter(product => {
			return product.product.name !== payload
		})
	},
	removeSelectedCards: (state) => {
		state.cart.products = state.cart.products.filter(product => product.selected !== true)
	},

	clearCart: (state) => state.cart = {},
}

const actions = {
	getCartList: async ({ commit }) => {
		try {
			const response = await axios(`${baseURL}/kolotok/orders/`, {
				headers: { Authorization: `token ${cookies.get('auth_token')}` }
			});

			if (response.status === 200) {
				//TODO: replace by cart
				commit('setCart', response.data[0]);
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