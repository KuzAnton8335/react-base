// reducer.js
const initialState = {
	field: Array(9).fill(''), // Игровое поле
	currentPlayer: 'X', // Текущий игрок
	isGameEnded: false, // Флаг окончания игры
	isDraw: false, // Флаг ничьей
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FIELD':
			return {
				...state,
				field: action.payload,
			};
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: action.payload,
			};
		case 'SET_IS_GAME_ENDED':
			return {
				...state,
				isGameEnded: action.payload,
			};
		case 'SET_IS_DRAW':
			return {
				...state,
				isDraw: action.payload,
			};
		case 'RESET_GAME':
			return {
				...initialState,
			};
		default:
			return state;
	}
};

export default reducer;
