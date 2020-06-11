import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		const { title, handleDelete, handleEdit } = this.props;
		return (
			<li className="list-group-item my-3 d-flex justify-content-between">
				<h6 className="text-capitalize">{title}</h6>
				<div className="todo-icon">
					<span className="mx-2 text-success" onClick={handleEdit}>
						<i className="fas fa-pen"></i>
					</span>
					<span className="mx-2 text-danger" onClick={handleDelete}>
						<i className="fas fa-trash"></i>
					</span>
				</div>
			</li>
		);
	}
}

export default TodoItem;
