import axios from "axios";

const baseURL = process.env.VUE_APP_BACKEND_BASEURL;

import { objectToStringQueryParams } from "@/js/objectToStringQueryParams";

const getProduct = async (id) => {
	try {
		const response = await axios.get(`${baseURL}/kolotok/products/${id}/`);

		return response;
	}
	catch (err) { throw new Error(err) }
}

const getProducts = async (params) => {
	const queryParams = objectToStringQueryParams(params || {});

	try {
		const response = await axios.get(`${baseURL}/search/products/${queryParams}`);

		return response;
	}
	catch (err) { throw new Error(err) }
}

export {
	getProduct,
	getProducts,
}