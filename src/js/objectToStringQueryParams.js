function objectToStringQueryParams(params) {
	const queryParams = ['?'];
	const paramsLength = Object.keys(params).length;

	let iterator = 0;
	for (const key in params) {

		if (Object.hasOwnProperty.call(params, key)) {
			if (paramsLength - 1 <= iterator) {
				queryParams.push(`${key}=${params[key]}`);
			}
			else {
				queryParams.push(`${key}=${params[key]}&`);
			}
		}

		iterator = iterator + 1;
	}

	return queryParams.join('');
}

export { objectToStringQueryParams }