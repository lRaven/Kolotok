const state = () => ({
	shopping_list: null,
})

const getters = {
	SHOPPING_LIST: state => {
		return state.shopping_list;
	},
}

const mutations = {
	SET_SHOPPING_LIST(state, payload) {
		state.shopping_list = payload;
	},
}

const actions = {
	setShoppingList: async (context) => {

	},
}

export default {
	state,
	getters,
	mutations,
	actions,
}