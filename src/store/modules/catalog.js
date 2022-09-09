import axios from "axios";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const state = () => ({
	categories: null,
	category: null,

	sub_categories: null,
	sub_category: null,

	products: null,
})

const getters = {}

const mutations = {
	SET_CATEGORIES(state, payload) {
		state.categories = payload;
	},
	SET_CATEGORY(state, payload) {
		state.category = payload;
	},
	SET_SUB_CATEGORIES(state, payload) {
		state.sub_categories = payload;
	},
	SET_SUB_CATEGORY(state, payload) {
		state.sub_category = payload;
	},
	SET_PRODUCTS(state, payload) {
		state.products = payload;
	}
}

const actions = {
	getCategories: async ({ commit }) => {
		try {
			const request = await axios.get(`${baseURL}/kolotok/categories`);

			if (request.status === 200) {
				commit('SET_CATEGORIES', request.data);
			} else if (request.status >= 400) {
				console.error(request.status);
			}
		}
		catch { console.error('Error'); }
	},

	getSubcategories: async ({ commit }) => {
		try {
			const request = await axios.get(`${baseURL}/kolotok/sub_categories`);
			if (request.status === 200) commit('SET_SUB_CATEGORIES', request.data);
		}
		catch { console.error('Error'); }
	},

	getProducts: async ({ commit }) => {
		try {
			const response = await axios.get(`${baseURL}/search/products/`);

			if (response.status === 200) {
				commit('SET_PRODUCTS', response.data);
			}
			return response;
		}
		catch (err) { throw new Error(err) }
	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}