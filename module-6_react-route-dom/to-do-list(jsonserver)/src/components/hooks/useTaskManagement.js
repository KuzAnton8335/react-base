import { useState } from 'react';
import { API_URL } from '../../const';

export const useTaskManagement = (setData) => {
	const [task, setTask] = useState('');
	const [editTaskId, setEditTaskId] = useState(null);

	const addTask = async (e) => {
		e.preventDefault();
		if (!task) return;

		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title: task, completed: false }),
			});
			const newTask = await response.json();
			setData((prevData) => [...prevData, newTask]);
			setTask('');
		} catch (err) {
			console.error(err);
		}
	};

	const editTask = async (e) => {
		e.preventDefault();
		if (!task || editTaskId === null) return;

		try {
			const response = await fetch(`${API_URL}/${editTaskId}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title: task, completed: false }),
			});
			const updatedTask = await response.json();
			setData((prevData) =>
				prevData.map((todo) => (todo.id === editTaskId ? updatedTask : todo)),
			);
			setTask('');
			setEditTaskId(null);
		} catch (err) {
			console.error(err);
		}
	};

	const deleteTask = async (id) => {
		try {
			await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
			setData((prevData) => prevData.filter((todo) => todo.id !== id));
		} catch (err) {
			console.error(err);
		}
	};

	const updateTask = async (id, updatedTask) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(updatedTask),
			});
			const result = await response.json();
			setData((prevData) =>
				prevData.map((todo) => (todo.id === id ? result : todo)),
			);
		} catch (err) {
			console.error(err);
		}
	};

	return {
		task,
		setTask,
		editTaskId,
		setEditTaskId,
		addTask,
		editTask,
		deleteTask,
		updateTask,
	};
};
