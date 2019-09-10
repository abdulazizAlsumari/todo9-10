import React from 'react';

export const InputTitle = ({ value, onChange, children }) => (
	<div className='input_container'>
		<label htmlFor='title'>Title: </label>
		<input id='title' value={value} onChange={onChange} />
		{children}
	</div>
);
