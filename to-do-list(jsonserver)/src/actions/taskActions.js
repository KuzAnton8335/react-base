import { API_URL } from '../const';

export const fetchTasks = () => async (dispatch) => {
	dispatch({ type: 'SET_LOADING', payload: true });
	try {
		const response = await fetch(`${API_URL}`);
		const data = await response.json();
		dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data });
	} catch (error) {
		dispatch({ type: 'SET_ERROR', payload: error });
	} finally {
		dispatch({ type: 'SET_LOADING', payload: false });
	}
};

export const addTask = (task) => async (dispatch) => {
	dispatch({ type: 'SET_LOADING', payload: true });
	try {
		const response = await fetch(`${API_URL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task),
		});
		const data = await response.json();
		dispatch({ type: 'ADD_TASK', payload: data });
	} catch (error) {
		dispatch({ type: 'SET_ERROR', payload: error });
	} finally {
		dispatch({ type: 'SET_LOADING', payload: false });
	}
};

export const editTask = (task) => async (dispatch) => {
	dispatch({ type: 'SET_LOADING', payload: true });
	try {
		const response = await fetch(`${API_URL}/${task.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(task),
		});
		const data = await response.json();
		dispatch({ type: 'EDIT_TASK', payload: data });
	} catch (error) {
		dispatch({ type: 'SET_ERROR', payload: error });
	} finally {
		dispatch({ type: 'SET_LOADING', payload: false });
	}
};

export const deleteTask = (taskId) => async (dispatch) => {
	dispatch({ type: 'SET_LOADING', payload: true });
	try {
		await fetch(`${API_URL}/${taskId}`, {
			method: 'DELETE',
		});
		dispatch({ type: 'DELETE_TASK', payload: taskId });
	} catch (error) {
		dispatch({ type: 'SET_ERROR', payload: error });
	} finally {
		dispatch({ type: 'SET_LOADING', payload: false });
	}
};
