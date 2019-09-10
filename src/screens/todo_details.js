import React, { Component } from 'react';
import { Header } from '../components/header';
import { Content } from '../components/content';
import { InputTitle } from '../components/input_title';
import { request } from '../utils/fetch';
import { URL, METHOD } from '../utils/constants';
import { Link } from 'react-router-dom';

export class TodoDetails extends Component {
	state = {};

	async componentDidMount() {
		const { match } = this.props;

		const todo = await request(URL(match.params.id), METHOD.GET);
		this.setState({ todo });
	}

	onChange = e => {
		const { target } = e;
		this.setState(prevState => ({
			todo: { ...prevState.todo, title: target.value }
		}));
	};

	edit = () => {
		const { todo } = this.state;
		request(URL(todo.id), METHOD.PUT, todo);
	};

	delete = async () => {
		const { todo } = this.state;

		await request(URL(todo.id), METHOD.DELETE);
		this.props.history.goBack();
	};

	toggle = async () => {
		const { todo } = this.state;
		await request(URL(todo.id), METHOD.PUT, {
			...todo,
			completed: !todo.completed
		});
		this.setState(prevState => ({
			todo: { ...todo, completed: !prevState.todo.completed }
		}));
	};

	render() {
		const { todo } = this.state;
		return (
			<div className='page details'>
				<Header title='Details' />
				<Content>
					{todo ? (
						<div className='content_container'>
							<InputTitle value={todo.title} onChange={this.onChange}>
								<button
									onClick={this.toggle}
									className={`toggle ${todo.completed ? 'completed' : ''}`}>
									<i className='fa fa-check' aria-hidden='true'></i>
								</button>
							</InputTitle>
							<div className='btn_container'>
								<button onClick={this.edit} className='save'>
									Save
								</button>
								<button onClick={this.delete} className='delete'>
									<i className='fa fa-trash' aria-hidden='true'></i>
								</button>
								<Link className='back' to='/'>
									back
								</Link>
							</div>
						</div>
					) : null}
				</Content>
			</div>
		);
	}
}
