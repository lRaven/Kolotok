const state = () => ({
	//*user
	token: localStorage.getItem('at') || '731fc0bf4f998e26644636a6b7ed4a0a064e26cd',
})
const getters = {
	//*user
	TOKEN: state => {
		return state.token;
	},
}
const mutations = {
	//*user
	SET_TOKEN(state, payload) {
		state.token = payload;
	},
}
const actions = {}
export default {
	state,
	getters,
	mutations,
	actions
}