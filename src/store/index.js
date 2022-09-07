import { createStore } from 'vuex'
import cabinet from '@/store/modules/cabinet'
import catalog from '@/store/modules/catalog'
import cart from '@/store/modules/cart'

export default createStore({
	state: {
		baseURL: process.env.VUE_APP_BACKEND_BASEURL,
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
		Cart: cart,
	}
})
