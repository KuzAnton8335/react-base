import { createStore } from 'redux';
import gameReducer from './reducers/game-reducer';

//Создаем хранилище
const store = createStore(gameReducer);

// Экспортируем хранилище
export default store;
