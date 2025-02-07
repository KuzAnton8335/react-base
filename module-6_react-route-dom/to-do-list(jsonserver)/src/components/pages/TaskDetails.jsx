import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../App.css';
import { API_URL } from '../../const.js';
import { useTaskManagement } from '../../hooks/useTaskManagement.js';
import { Loader } from './Loader.jsx';

export const TaskDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [task, setTask] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState('');
	const { deleteTask, updateTask } = useTaskManagement(() => {});

	// Получение задачи по идентификатору с сервера
	useEffect(() => {
		fetch(`${API_URL}/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setTask(data);
				setEditedTitle(data.title);
			})
			.catch((error) =>
				console.error('При загрузке задачи произошла ошибка...', error),
			);
	}, [id]);

	if (!task) {
		return <Loader />;
	}

	const handleEdit = () => {
		// Переключение режима редактирования
		setIsEditing(true);
	};

	const handleSave = () => {
		// Сохраните обновленное название задачи
		const updatedTask = { ...task, title: editedTitle };
		updateTask(task.id, updatedTask);
		setTask(updatedTask);
		setIsEditing(false);
	};

	const handleCancel = () => {
		// Отмените редактирование и сбросьте заголовок
		setEditedTitle(task.title);
		setIsEditing(false);
	};

	const handleDelete = async () => {
		// Удалите задачу и перейдите на главную страницу
		await deleteTask(task.id);
		navigate('/');
	};

	const handlBack = () => {
		navigate(-1);
	};

	return (
		<div className="task-container">
			<p className="task-number"> Номер задачи: {task.id}</p>
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
							Сохранить
						</button>
						<button
							className="task-button-cancel button"
							onClick={handleCancel}
						>
							Отменить
						</button>
					</div>
				</div>
			) : (
				<p className="task-title">{task.title}</p>
			)}
			<div className="task-buttons">
				<button className="task-button-arrow button" onClick={handlBack}>
					<img
						src="../../public/arrow.svg"
						alt="стрелка назад"
						width={24}
						height={24}
					/>
				</button>
				{!isEditing && (
					<button className="task-button-edit button" onClick={handleEdit}>
						Редактировать Задачу
					</button>
				)}
				<button
					className="task-button-delete button"
					onClick={handleDelete} // Use the updated handleDelete function
				>
					Удалить Задачу
				</button>
			</div>
		</div>
	);
};
