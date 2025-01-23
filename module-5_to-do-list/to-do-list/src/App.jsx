import './App.css';

export const App = () => {
	return (
		<div className="container">
			<h1 className="text-center">Мой список задач!</h1>
			<form className="needs-validation" action="#" method="POST">
				<div className="form-group was-validated">
					<span className="form-label">Add Task</span>
					<div className="input-box">
						<input
							type="text"
							placeholder="Add Task"
							className="form-control"
							name="task_name"
							id="task_name"
							required
						/>
						<button type="submit" className="btn btn-primary">
							<i className="fa fa-plus" aria-hidden="true"></i>
						</button>
					</div>
					<div className="invalid-feedback">add task</div>
				</div>
				<div className="task-box">
					<p className="task-text">Your Task Is It</p>
					<div className="btn-group">
						<a className="update-task-link" href="#">
							<i className="fa-solid fa-pen"></i>
						</a>
						<a className="delete-task-link" href="#">
							<i className="fa-solid fa-trash"></i>
						</a>
					</div>
				</div>
			</form>
		</div>
	);
};
