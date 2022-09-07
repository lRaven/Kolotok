import axios from "axios";
import store from '@/store';

const state = () => ({
	categories: null,
	category: null,
	sub_categories: null,
	sub_category: null,
	products: null,
})

const getters = {
	CATEGORIES: state => {
		return state.categories
	},
	CATEGORY: state => {
		return state.category;
	},
	SUB_CATEGORIES: state => {
		return state.sub_categories
	},
	SUB_CATEGORY: state => {
		return state.sub_category
	},
	PRODUCTS: state => {
		return state.products
	}
}

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
			const request = await axios.get(`${store.state.baseURL}/kolotok/categories`);

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
			const request = await axios.get(`${store.state.baseURL}/kolotok/sub_categories`);
			if (request.status === 200) commit('SET_SUB_CATEGORIES', request.data);
		}
		catch { console.error('Error'); }
	},
	getProducts: async ({ commit }) => {
		try {
			const request = await axios.get(`${store.state.baseURL}/search/products`);

			if (request.status === 200) commit('SET_PRODUCTS', request.data);
		}
		catch {
			console.error('Error');
		}
	}
}

export default {
	state,
	getters,
	mutations,
	actions,
}