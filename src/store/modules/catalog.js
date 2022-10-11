import axios from "axios";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const state = () => ({
	categories: null,
	category: null,

	subcategories: null,
	subcategory: null,

	products: null,
})

const getters = {}

const mutations = {
	setCategories: (state, payload) => state.categories = payload,
	clearCategories: (state) => state.categories = null,

	setCategory: (state, payload) => state.category = payload,
	clearCategory: (state) => state.category = null,

	setSubcategories: (state, payload) => state.subcategories = payload,
	clearSubcategories: (state) => state.subcategories = null,

	setSubcategory: (state, payload) => state.subcategory = payload,
	clearSubcategory: (state) => state.subcategory = null,

	setProducts: (state, payload) => state.products = payload,
	clearProducts: (state) => state.products = null,
}

const actions = {
	getCategories: async ({ commit }) => {
		try {
			const request = await axios.get(`${baseURL}/kolotok/categories`);

			if (request.status === 200) {
				commit('setCategories', request.data);
			} else if (request.status >= 400) {
				throw new Error(request.status)
			}
		}
		catch (err) { throw new Error(err) }
	},

	getSubcategories: async ({ commit }) => {
		try {
			const request = await axios.get(`${baseURL}/kolotok/sub_categories`);
			if (request.status === 200) commit('setSubcategories', request.data);
		}
		catch (err) { throw new Error(err) }
	},

	clearCatalogState({ commit }) {
		commit('clearCategories');
		commit('clearCategory');
		commit('clearSubcategories');
		commit('clearSubcategory');
		commit('clearProducts');
	}
}

export default {
	state,
	getters,
	mutations,
	actions,
}