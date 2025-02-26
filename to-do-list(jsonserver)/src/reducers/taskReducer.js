const initialState = {
	data: [],
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TASKS_SUCCESS':
			return { ...state, data: action.payload };
		case 'ADD_TASK':
			return { ...state, data: [...state.data, action.payload] };
		case 'EDIT_TASK':
			return {
				...state,
				data: state.data.map((task) =>
					task.id === action.payload.id ? action.payload : task,
				),
			};
		case 'DELETE_TASK':
			return {
				...state,
				data: state.data.filter((task) => task.id !== action.payload),
			};
		default:
			return state;
	}
};

export default taskReducer;
