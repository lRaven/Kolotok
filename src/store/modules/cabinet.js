import cookies from "vue-cookies";

const state = () => ({
	token: cookies.get('auth_token') || '9d05008dfcbdfab1870cfa281b9e617dcbab3627',

	user: {},
})

const getters = {}

const mutations = {}

const actions = {
	clearCabinetState({ commit }) {
		commit;
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
