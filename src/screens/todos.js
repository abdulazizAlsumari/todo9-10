import React, { Component } from 'react';
import { Header } from '../components/header';
import { Content } from '../components/content';
import { Todo } from '../components/todo';
import { request } from '../utils/fetch';
import { URL, METHOD } from '../utils/constants';
import { Link } from 'react-router-dom';

export class Todos extends Component {
	state = {
		todos: []
	};

	async componentDidMount() {
		const todos = await request(URL(), METHOD.GET);
		this.setState({ todos });
	}

	toggleComplete = async todo => {
		await request(URL(todo.id), METHOD.PUT, {
			...todo,
			completed: !todo.completed
		});

		this.setState(prevState => ({
			todos: prevState.todos.map(prevTodo => {
				if (prevTodo.id === todo.id) {
					return { ...todo, completed: !prevTodo.completed };
				}
				return prevTodo;
			})
		}));
	};

	toggleDelete = async todo => {
		await request(URL(todo.id), METHOD.DELETE);

		this.setState(prevState => ({
			todos: prevState.todos.filter(prevTodo => prevTodo.id !== todo.id)
		}));
	};

	render() {
		const { todos } = this.state;
		return (
			<div className='page todos'>
				<Header title='Todos' />
				<Content>
					{todos.map(todo => (
						<Todo
							key={todo.id}
							toggleComplete={this.toggleComplete}
							toggleDelete={this.toggleDelete}
							todo={todo}
						/>
					))}
				</Content>
				<Link to='/new_todo'>
					<button className='add'>
						<i className='fa fa-plus' aria-hidden='true'></i>
					</button>
				</Link>
			</div>
		);
	}
}
