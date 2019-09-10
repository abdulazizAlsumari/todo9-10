import React from 'react';
import { Link } from 'react-router-dom';

export const Todo = ({ todo, toggleComplete, toggleDelete }) => (
	<Link to={`todo/${todo.id}`}>
		<div className='todo'>
			<div>
				<button
					onClick={() => toggleComplete(todo)}
					className={`toggle ${todo.completed ? 'completed' : ''}`}>
					<i className='fa fa-check' aria-hidden='true'></i>
				</button>
			</div>
			<div>
				<h3>{todo.title}</h3>
			</div>
			<div>
				<button onClick={() => toggleDelete(todo)} className='delete'>
					<i className='fa fa-trash' aria-hidden='true'></i>
				</button>
			</div>
		</div>
	</Link>
);
