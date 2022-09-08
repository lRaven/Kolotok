import axios from "axios";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

const getProduct = async (id) => {
	try {
		const response = await axios.get(`${baseURL}/kolotok/products/${id}/`);

		return response;
	}
	catch (err) { throw new Error(err) }
}

export {
	getProduct
}