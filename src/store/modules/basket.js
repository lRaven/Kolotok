const state = () => ({
	shopping_list: [
		{
			id: 1,
			img: "img/catalog/catalog-item9.png",
			name: "Люстра декоративная Ambra",
			price_old: 22000,
			price: 19950,
			article: "FR5167PL-06BS",
		},
		{
			id: 2,
			img: "img/catalog/catalog-item3.png",
			name: "Кресло Гомер Симпсон",
			price_old: 22000,
			price: 9750,
			article: "FR5167PL-06BS",
		},
		{
			id: 3,
			img: "img/catalog/catalog-item3.png",
			name: "Кран водопроводный сенсорный",
			price_old: 22000,
			price: 7250,
			article: "FR5167PL-06BS",
		},
	],
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
	setShoppingList: async (context, params) => {
		context.getters.SHOPPING_LIST.forEach(product => {
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