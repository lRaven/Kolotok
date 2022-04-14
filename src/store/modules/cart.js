const state = () => ({
	cart_list: [
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
			img: "img/catalog/catalog-item2.png",
			name: "Кран водопроводный сенсорный",
			price_old: 22000,
			price: 7250,
			article: "FR5167PL-06BS",
		},
	],
})

const getters = {
	CART_LIST: state => {
		return state.cart_list;
	},
}

const mutations = {
	SET_CART_LIST(state, payload) {
		state.cart_list = payload;
	},
}

const actions = {
	setShoppingList: async (context, params) => {
		context.getters.CART_LIST.forEach(product => {
			if (params.id === product.id) {
				product.quantity = Number(params.quantity);
			}
		});
	},

	selectShoppingItem: async (context, params) => {
		context.getters.CART_LIST.forEach(product => {
			if (params.selectAll) {
				product.selected = params.checked;
			}
			else if (params.selectAll === false) {
				product.selected = false;
			}
			else {
				if (params.id === product.id) {
					product.selected = params.checked;
				}
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