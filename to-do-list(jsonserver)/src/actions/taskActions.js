import { API_URL } from '../const';

export const fetchTasks = () => async (dispatch) => {
	dispatch({ type: 'SET_LOADING', payload: true });
	try {
		const response = await fetch(`${API_URL}`); // Replace with your API endpoint
		const data = await response.json();
		dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data });
	} catch (error) {
		dispatch({ type: 'SET_ERROR', payload: error });
	} finally {
		dispatch({ type: 'SET_LOADING', payload: false });
	}
};

export const addTask = (task) => ({
	type: 'ADD_TASK',
	payload: task,
});

export const editTask = (task) => ({
	type: 'EDIT_TASK',
	payload: task,
});

export const deleteTask = (taskId) => ({
	type: 'DELETE_TASK',
	payload: taskId,
});
