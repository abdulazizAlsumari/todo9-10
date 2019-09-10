import React, { Component } from 'react';
import { NewTodo, TodoDetails, Todos } from './screens';
import { Footer } from './components/footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<div style={{ height: '92%' }}>
					<Router>
						<Route path='/' exact component={Todos} />
						<Route path='/new_todo' component={NewTodo} />
						<Route path='/todo/:id' component={TodoDetails} />
					</Router>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
