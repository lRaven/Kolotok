import { getCategories, getProducts } from "../../api/catalog";

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
	setCategories: async () => { getCategories(); },
	setProducts: async () => { getProducts(); }
}

export default {
	state,
	getters,
	mutations,
	actions,
}