import axios from "axios";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

import { objectToStringQueryParams } from "@/js/objectToStringQueryParams";

const state = () => ({
	categories: null,
	category: null,

	subcategories: null,
	subcategory: null,

	products: null,
})

const getters = {}

const mutations = {
	SET_CATEGORIES: (state, payload) => state.categories = payload,
	CLEAR_CATEGORIES: (state) => state.categories = null,

	SET_CATEGORY: (state, payload) => state.category = payload,
	CLEAR_CATEGORY: (state) => state.category = null,

	SET_SUBCATEGORIES: (state, payload) => state.subcategories = payload,
	CLEAR_SUBCATEGORIES: (state) => state.subcategories = null,

	SET_SUBCATEGORY: (state, payload) => state.subcategory = payload,
	CLEAR_SUBCATEGORY: (state) => state.subcategory = null,

	SET_PRODUCTS: (state, payload) => state.products = payload,
	CLEAR_PRODUCTS: (state) => state.products = null,
}

const actions = {
	getCategories: async ({ commit }) => {
		try {
			const request = await axios.get(`${baseURL}/kolotok/categories`);

			if (request.status === 200) {
				commit('SET_CATEGORIES', request.data);
			} else if (request.status >= 400) {
				throw new Error(request.status)
			}
		}
		catch (err) { throw new Error(err) }
	},

	getSubcategories: async ({ commit }) => {
		try {
			const request = await axios.get(`${baseURL}/kolotok/sub_categories`);
			if (request.status === 200) commit('SET_SUBCATEGORIES', request.data);
		}
		catch (err) { throw new Error(err) }
	},

	getProducts: async (context, params) => {
		const queryParams = objectToStringQueryParams(params || {});

		try {
			const response = await axios.get(`${baseURL}/search/products/${queryParams}`);

			return response;
		}
		catch (err) { throw new Error(err) }
	},

	clearCatalogState({ commit }) {
		commit('CLEAR_CATEGORIES');
		commit('CLEAR_CATEGORY');
		commit('CLEAR_SUBCATEGORIES');
		commit('CLEAR_SUBCATEGORY');
		commit('CLEAR_PRODUCTS');
	}
}

export default {
	state,
	getters,
	mutations,
	actions,
}