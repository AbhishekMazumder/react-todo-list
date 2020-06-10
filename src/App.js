import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
	state = {
		items: [
			{ id: 1, title: 'wake up' },
			{ id: 2, title: 'make breakfast' },
		],
		id: uuidv4(),
		item: '',
		editItem: false,
	};

	handleChange = (e) => {
		console.log('handle change');
	};

	handleSubmit = (e) => {
		console.log('handle submit');
	};

	clearList = () => {
		console.log('clearList');
	};

	handleDelete = (e) => {
		console.log(`delete `);
	};

	handleEdit = (e) => {
		console.log(`edit`);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">
							Todo Input
						</h3>
					</div>
				</div>
				<TodoInput
					item={this.state.item}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					editItem={this.editItem}
				/>
				<TodoList
					items={this.state.items}
					clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
				/>
			</div>
		);
	}
}

export default App;
