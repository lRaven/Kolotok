import { createStore } from 'vuex'
import cabinet from '@/store/modules/cabinet'
import catalog from '@/store/modules/catalog'
import cart from '@/store/modules/cart'

export default createStore({
	state: {
		baseURL: process.env.VUE_APP_BACKEND_BASEURL,
		documentWidth: document.documentElement.clientWidth,
	},
	getters: {
		BASEURL: state => {
			return state.baseURL;
		}
	},
	mutations: {
		SET_BASEURL: (state, payload) => state.baseURL = payload,

		SET_DOCUMENT_WIDTH: (state, payload) => state.documentWidth = payload,
	},
	actions: {
		getDocumentWidth: async (context) => {
			await context.commit('SET_DOCUMENT_WIDTH', document.documentElement.clientWidth);
			await window.addEventListener("resize", () => {
				setTimeout(() => {
					context.commit('SET_DOCUMENT_WIDTH', document.documentElement.clientWidth);
				}, 100);
			});
		},
	},
	modules: {
		Cabinet: cabinet,
		Catalog: catalog,
		Cart: cart,
	}
})
