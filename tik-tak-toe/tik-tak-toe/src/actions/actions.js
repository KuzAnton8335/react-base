// actions.js
import {
	SET_CURRENT_PLAYER,
	SET_FIELD,
	SET_IS_DRAW,
	SET_IS_GAME_ENDED,
	SET_RESET_GAME,
} from './actionsType';

export const setField = (newField) => ({
	type: SET_FIELD,
	payload: newField,
});

export const setIsGameEnded = (isGameEnded) => ({
	type: SET_IS_GAME_ENDED,
	payload: isGameEnded,
});

export const setIsDraw = (isDraw) => ({
	type: SET_IS_DRAW,
	payload: isDraw,
});

export const setCurrentPlayer = (currentPlayer) => ({
	type: SET_CURRENT_PLAYER,
	payload: currentPlayer,
});

export const setResetGame = (resetGame) => ({
	type: SET_RESET_GAME,
	payload: resetGame,
});
