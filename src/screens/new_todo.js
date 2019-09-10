import React, { Component } from 'react';
import { Header } from '../components/header';
import { Content } from '../components/content';
import { InputTitle } from '../components/input_title';
import { request } from '../utils/fetch';
import { URL, METHOD } from '../utils/constants';
import { Link } from 'react-router-dom';

export class NewTodo extends Component {
	state = {
		title: ''
	};

	onChange = e => {
		const { target } = e;
		this.setState({ title: target.value });
	};

	add = async () => {
		const { title } = this.state;
		await request(URL(), METHOD.POST, { title });
		this.props.history.goBack();
	};

	render() {
		const { title } = this.state;
		return (
			<div className='page details'>
				<Header title='New Todo' />
				<Content>
					<div className='content_container'>
						<InputTitle value={title} onChange={this.onChange} />
						<div className='btn_container'>
							<button onClick={this.add} className='save'>
								Add Todo
							</button>
							<Link className='back' to='/'>
								back
							</Link>
						</div>
					</div>
				</Content>
			</div>
		);
	}
}
