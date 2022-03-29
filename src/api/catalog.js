import axios from "axios";
import store from '../store';

async function getCategories() {
	try {
		const request = await axios.get(`${store.getters.BASEURL}/kolotok/categories`,
			{
				headers: { Authorization: `token ${store.getters.TOKEN}` },
			}
		);
		store.commit('SET_CATEGORIES', request.data);
		getSubCategories();
	}
	catch { console.error('Error'); }
}

async function getSubCategories() {
	try {
		const request = await axios.get(`${store.getters.BASEURL}/kolotok/sub_categories`,
			{
				headers: { Authorization: `token ${store.getters.TOKEN}` },
			}
		);
		store.commit('SET_SUB_CATEGORIES', request.data);
	}
	catch { console.error('Error'); }
}

export { getCategories, getSubCategories } 