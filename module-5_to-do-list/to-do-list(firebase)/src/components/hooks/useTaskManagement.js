import { ref, remove, set } from 'firebase/database';
import { useState } from 'react';
import { db } from '../../firebase';

export const useTaskManagement = (setData) => {
	const [task, setTask] = useState('');
	const [editTaskId, setEditTaskId] = useState(null);

	const addTask = async (e) => {
		e.preventDefault();
		if (!task) return;

		const newTaskRef = ref(db, 'tasks/' + Date.now());
		await set(newTaskRef, { title: task, completed: false });
		setData((prevData) => [
			...prevData,
			{ id: newTaskRef.key, title: task, completed: false },
		]);
		setTask('');
	};

	const editTask = async (e) => {
		e.preventDefault();
		if (!task || editTaskId === null) return;

		const taskRef = ref(db, 'tasks/' + editTaskId);
		await set(taskRef, { title: task, completed: false });
		setData((prevData) =>
			prevData.map((todo) =>
				todo.id === editTaskId ? { ...todo, title: task } : todo,
			),
		);
		setTask('');
		setEditTaskId(null);
	};

	const deleteTask = async (id) => {
		const taskRef = ref(db, 'tasks/' + id);
		await remove(taskRef);
		setData((prevData) => prevData.filter((todo) => todo.id !== id));
	};

	return { task, setTask, editTaskId, setEditTaskId, addTask, editTask, deleteTask };
};
