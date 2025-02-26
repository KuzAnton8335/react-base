// reducer.js
import {
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_IS_DRAW,
	SET_IS_GAME_ENDED,
	SET_RESET_GAME,
} from '../actions/actionsType';

const initialState = {
	field: Array(9).fill(''),
	isGameEnded: false,
	isDraw: false,
	currentPlayer: 'X',
};

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FIELD:
			return { ...state, field: action.payload };
		case SET_IS_GAME_ENDED:
			return { ...state, isGameEnded: action.payload };
		case SET_IS_DRAW:
			return { ...state, isDraw: action.payload };
		case SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: action.payload };
		case SET_RESET_GAME:
			return initialState;
		default:
			return state;
	}
};

export default gameReducer;
