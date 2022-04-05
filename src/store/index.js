import { createStore } from 'vuex'
import cabinet from './modules/cabinet'
import catalog from './modules/catalog'
import shopping_basket from './modules/shopping_basket'

export default createStore({
	state: {
		baseURL: `http://localhost:8001`,
	},
	getters: {
		BASEURL: state => {
			return state.baseURL;
		}
	},
	mutations: {
		SET_BASEURL(state, payload) {
			state.baseURL = payload;
		}
	},
	actions: {
	},
	modules: {
		Cabinet: cabinet,
		Catalog: catalog,
		ShoppingBasket: shopping_basket,
	}
})
