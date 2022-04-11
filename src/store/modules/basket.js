const state = () => ({
	shopping_list: [
		{
			id: 1,
			img: "img/catalog/catalog-item1.png",
			name: "Люстра декоративная Ambra",
			price: "19950",
			article: "FR5167PL-06BS",
		},
		{
			id: 2,
			img: "img/catalog/catalog-item2.png",
			name: "Кресло Гомер Симпсон",
			price: "9750",
			article: "FR5167PL-06BS",
		},
		{
			id: 3,
			img: "img/catalog/catalog-item3.png",
			name: "Кран водопроводный сенсорный",
			price: "7250",
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
	setShoppingList: async (context, ...params) => {
		context.getters.SHOPPING_LIST.forEach(product => {
			if (params[0].id == product.id) {
				product.quantity = params[0].quantity;
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