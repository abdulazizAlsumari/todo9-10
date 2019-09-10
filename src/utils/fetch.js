import { METHOD } from './constants';

export const request = (url, method, body) =>
	new Promise((resolve, reject) => {
		const props = METHOD.GET === method ? {} : { body: JSON.stringify(body) };
		fetch(url, {
			method,
			...props,
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then(res => res.json())
			.then(json => resolve(json))
			.catch(err => reject(err));
	});
