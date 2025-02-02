import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import '../App.css';
import { API_URL } from '../const.js';
import { useTaskManagement } from './hooks/useTaskManagement';

export const TaskDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate(); // Initialize useNavigate
	const [task, setTask] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState('');
	const { deleteTask, updateTask } = useTaskManagement(() => {}); // Pass a no-op function

	// Fetch task by ID from the server
	useEffect(() => {
		fetch(`${API_URL}/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setTask(data);
				setEditedTitle(data.title);
			})
			.catch((error) =>
				console.error('Error occurred while loading the task...', error),
			);
	}, [id]);

	if (!task) {
		return <p>Loading...</p>;
	}

	const handleEdit = () => {
		// Toggle edit mode
		setIsEditing(true);
	};

	const handleSave = () => {
		// Save the updated task title
		const updatedTask = { ...task, title: editedTitle };
		updateTask(task.id, updatedTask);
		setTask(updatedTask);
		setIsEditing(false);
	};

	const handleCancel = () => {
		// Cancel editing and reset the title
		setEditedTitle(task.title);
		setIsEditing(false);
	};

	const handleDelete = async () => {
		// Delete the task and navigate to the homepage
		await deleteTask(task.id);
		navigate('/'); // Redirect to the homepage
	};

	return (
		<div className="task-container">
			<p className="task-number">Task ID: {task.id}</p>
			{isEditing ? (
				<div>
					<input
						type="text"
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
						className="task-input"
					/>
					<div className="task-buttons saves-buttons">
						<button className="task-button-save button" onClick={handleSave}>
							Save
						</button>
						<button
							className="task-button-cancel button"
							onClick={handleCancel}
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<p className="task-title">{task.title}</p>
			)}
			<div className="task-buttons">
				{!isEditing && (
					<button className="task-button-edit button" onClick={handleEdit}>
						Edit Task
					</button>
				)}
				<button
					className="task-button-delete button"
					onClick={handleDelete} // Use the updated handleDelete function
				>
					Delete Task
				</button>
			</div>
		</div>
	);
};
