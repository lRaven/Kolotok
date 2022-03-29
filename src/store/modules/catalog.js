import { getCategories } from "../../api/catalog";

const state = () => ({
	categories: null,
	sub_categories: null,
})

const getters = {
	CATEGORIES: state => {
		return state.categories
	},
	SUB_CATEGORIES: state => {
		return state.sub_categories
	},
}

const mutations = {
	SET_CATEGORIES(state, payload) {
		state.categories = payload;
	},
	SET_SUB_CATEGORIES(state, payload) {
		state.sub_categories = payload;
	},
}

const actions = {
	setCategories: async () => { getCategories(); },
}

export default {
	state,
	getters,
	mutations,
	actions,
}