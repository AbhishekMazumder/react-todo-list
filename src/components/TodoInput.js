import React, { Component } from 'react';

class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book"></i>
							</div>
						</div>
						<input
							type="text"
							className="form-control text-capitalize"
							placeholder="add todo item"
							value={item}
							onChnage={handleChange}
						/>
					</div>
					<button
						className={
							editItem
								? 'btn btn-success btn-block mt-3 text-uppercase'
								: 'btn btn-primary btn-block mt-3 text-uppercase'
						}
						type="submit"
						disabled={item ? false : true}
					>
						{editItem ? 'Edit Item' : 'Add Item'}
					</button>
				</form>
			</div>
		);
	}
}

export default TodoInput;
