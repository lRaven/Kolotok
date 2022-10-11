import { createStore } from 'vuex'
import cabinet from '@/store/modules/cabinet'
import catalog from '@/store/modules/catalog'
import cart from '@/store/modules/cart'

export default createStore({
	state: {
		baseURL: process.env.VUE_APP_BACKEND_BASEURL,
		documentWidth: document.documentElement.clientWidth,
	},
	mutations: { setDocumentWidth: (state, payload) => state.documentWidth = payload, },
	actions: {
		getDocumentWidth: async (context) => {
			await context.commit('setDocumentWidth', document.documentElement.clientWidth);
			await window.addEventListener("resize", () => {
				setTimeout(() => {
					context.commit('setDocumentWidth', document.documentElement.clientWidth);
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
