import axios from "axios";
import cookie from 'vue-cookies';

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
			{ headers: { Authorization: `token ${cookie.get('auth_token')}`, }, }
		)

		return response;
	}
	catch (err) { throw new Error(err) }
}

const change_user_data = async (new_data) => {
	try {
		const response =
			await axios.put(`${baseURL}/auth/users/me/`,
				{ ...new_data },
				{ headers: { Authorization: `token ${cookie.get('auth_token')}`, }, }
			)
		return response;
	}
	catch (err) { return err.response }
}

const change_password = async (passwords) => {
	try {
		const response =
			await axios.post(`${baseURL}/auth/users/set_password/`,
				{ ...passwords },
				{ headers: { Authorization: `token ${cookie.get('auth_token')}`, }, }
			)
		return response;
	}
	catch (err) { return err.response }
}

const upload_avatar = async (user_id, avatar) => {
	try {
		const response = await axios.put(`${baseURL}/auth/users/upload_avatar/${user_id}/`,
			{ avatar },
			{
				headers: {
					Authorization: `token ${cookie.get('auth_token')}`,
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return response;
	}
	catch (err) { return err.response }
}

export { login, registration, logout, change_user_data, change_password, upload_avatar }