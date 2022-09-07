import axios from "axios";
// import store from '@/store';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

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

const getters = {}

const mutations = {
	SET_CART_LIST: (state, payload) => state.cart_list = payload,

	SELECT_ALL_CART_ITEMS: state => {
		state.cart_list.forEach(item => item.selected = true);
	},
	SELECT_CART_ITEM: (state, payload) => {
		state.cart_list.forEach(item => {
			if (item.id === payload) { item.selected = true }
		})
	},


	UNSELECT_ALL_CART_ITEMS: state => {
		state.cart_list.forEach(item => item.selected = false);
	},
	UNSELECT_CART_ITEM: (state, payload) => {
		state.cart_list.forEach(item => {
			if (item.id === payload) { item.selected = false }
		})
	},

	SET_CART_ITEM_COUNT: (state, payload) => {
		state.cart_list.forEach(item => {
			if (item.id === payload.id) { item.count = payload.count }
		})
	}
}

const actions = {
	getCartList: async () => {
		try {
			const response = await axios(`${baseURL}/`);

			return response;
		}
		catch (err) { throw new Error(err) }
	},

	setShoppingList: (context, params) => {
		context.state.cart_list.forEach(product => {
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