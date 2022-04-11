import { createStore } from 'vuex'
import cabinet from '@/store/modules/cabinet'
import catalog from '@/store/modules/catalog'
import basket from '@/store/modules/basket'

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
		Basket: basket,
	}
})
