export const URL = id =>
	`https://jsonplaceholder.typicode.com/todos/${id || ''}`;

export const METHOD = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT',
	DELETE: 'DELETE'
};
