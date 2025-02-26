const initialState = {
	loading: false,
	error: null,
	isSorted: false,
};

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOADING':
			return { ...state, loading: action.payload };
		case 'SET_ERROR':
			return { ...state, error: action.payload };
		case 'TOGGLE_SORT':
			return { ...state, isSorted: !state.isSorted };
		default:
			return state;
	}
};

export default uiReducer;
