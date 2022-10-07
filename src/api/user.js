import axios from "axios";
import cookies from 'vue-cookies';

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const login = async (authData) => {
	try {
		const response = await axios.post(`${baseURL}/auth/token/login/`,
			{ ...authData }
		);
		return response;
	}
	catch (err) { return err.response }
}

const registration = async (authData) => {
	try {
		const response = await axios.post(`${baseURL}/auth/users/`, { ...authData })
		return response;
	}
	catch (err) { return err.response }
}

const logout = async () => {
	try {
		const response = await axios.post(`${baseURL}/auth/token/logout/`, {},
			{ headers: { Authorization: `token ${cookies.get('auth_token')}`, }, }
		)

		return response;
	}
	catch (err) { throw new Error(err) }
}

const changeUserData = async (new_data) => {
	try {
		const response =
			await axios.put(`${baseURL}/auth/users/me/`,
				{ ...new_data },
				{ headers: { Authorization: `token ${cookies.get('auth_token')}`, }, }
			)
		return response;
	}
	catch (err) { return err.response }
}

const changePassword = async (passwords) => {
	try {
		const response =
			await axios.post(`${baseURL}/auth/users/set_password/`,
				{ ...passwords },
				{ headers: { Authorization: `token ${cookies.get('auth_token')}`, }, }
			)
		return response;
	}
	catch (err) { return err.response }
}

const uploadAvatar = async (user_id, avatar) => {
	try {
		const response = await axios.put(`${baseURL}/auth/users/upload_avatar/${user_id}/`,
			{ avatar },
			{
				headers: {
					Authorization: `token ${cookies.get('auth_token')}`,
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response;
	}
	catch (err) { return err.response }
}

const getOrders = async () => {

	try {
		const response = await axios(`${baseURL}/kolotok/orders/`, {
			headers: { Authorization: `token ${cookies.get('auth_token')}` }
		});

		return response

	}
	catch (err) { throw new Error(err) }
}

export {
	login,
	registration,
	logout,
	changeUserData,
	changePassword,
	uploadAvatar,
	getOrders
}
